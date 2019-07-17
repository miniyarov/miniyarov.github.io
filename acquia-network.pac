function FindProxyForURL(url, host) {
  // jenkins goes through bastion
  if (shExpMatch(host, "*.jenkins.r53.ahdev.co"))
    return "SOCKS5 127.0.0.1:9999";
  if (shExpMatch(host, "*.ahdev.co"))
    return "SOCKS5 127.0.0.1:9999";
  return "DIRECT";
}
