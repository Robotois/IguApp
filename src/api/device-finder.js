import axios from 'axios';
import { NetworkInfo } from 'react-native-network-info';
import { probe } from './ping';

const getIpAddress = () => new Promise((resolve, reject) => {
  // resolve('192.168.1.10');
  NetworkInfo.getIPV4Address((ip) => {
    // alert(`MyIp: ${ip}`);
    if (ip) {
      resolve(ip);
    } else {
      // alert('error: ', ip);
      reject(new Error('ip address non available'));
    }
  });
});

const ipFormatter = ipv4 => (ipv4 ?
  ipv4.match(/([0-9]{1,3}.){3}/)[0].concat('x') :
  undefined);

const ipFormats = async () => {
  let myIp;
  try {
    myIp = await getIpAddress();
  } catch (e) {
    console.log('IP Address Error:', e);
  }
  const ips = myIp ? [ipFormatter(myIp)] : [];

  return ips;
};

const ipPopulate = (ipFormat) => {
  const vect = (new Array(255)).fill(false);
  const ips = vect.map((value, index) => ipFormat.replace(/.x/g, `.${index + 1}`));
  return ips;
};

const ipsGenerator = async () => {
  const formats = await ipFormats();
  const ipsVector = formats.reduce(
    (arr, format) => arr.concat(ipPopulate(format)),
    [],
  );
  return ipsVector;
};

const testConnection = ip => new Promise((resolve, reject) => {
  probe(ip, 8082, (err, available) => {
    if (err) reject(err);
    if (available) {
      // console.log(`ip: ${ip} available`);
      axios({ method: 'get', url: `http://${ip}:8082/wifi/hostname` })
        .then((response) => {
          const { data: { hostname } } = response;
          resolve({ ip, available: true, hostname });
        })
        .catch((error) => {
          resolve({ ip, available: false });
          // console.log(error);
        });
    } else {
      resolve({ ip, available: false });
    }
  });
});

const discoverAll = async () => {
  const ips = await ipsGenerator();
  return Promise.all(ips.map(ip => testConnection(ip)));
};

export default getConnected = () => new Promise((resolve) => {
  discoverAll().then(connected => resolve(connected.filter(status => status.available)));
});

// getConnected().then((connected) => {
//   console.log('allConnected:', connected);
// });
