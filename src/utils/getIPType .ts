import { VALID_IP_REGEX } from "../constant/common";

type IPType = {
    label: string;
    color: string;
  };
  
  export const getIPType = (ip: string): IPType => {
    const isValidIP = VALID_IP_REGEX.test(ip);
    if (!isValidIP) {
      return { label: 'Invalid IP', color: 'bg-red-100 text-red-800' };
    }
  
    const [a, b] = ip.split('.').map(Number);
  
    const rules: Array<[boolean, IPType]> = [
      [a === 10, { label: 'Private (Class A)', color: 'bg-green-100 text-green-800' }],
      [a === 172 && b >= 16 && b <= 31, { label: 'Private (Class B)', color: 'bg-purple-100 text-purple-800' }],
      [a === 192 && b === 168, { label: 'Private (Class C)', color: 'bg-blue-100 text-blue-800' }],
    ];
  
    const match = rules.find(([condition]) => condition);
    return match?.[1] ?? { label: 'Public or Unknown', color: 'bg-gray-100 text-gray-800' };
  };
  