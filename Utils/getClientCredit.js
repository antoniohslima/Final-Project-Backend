export default function getClientCredit(client) {
  let cardLevel;
  let limit;

  if (client.net_worth >= 10000000) {
    cardLevel = 'Full';
    limit = null;
  } else if (client.net_worth > 1000000) {
    cardLevel = 'Black';
    limit = 200000;
  } else if (client.net_worth > 100000) {
    cardLevel = 'Platinum';
    limit = 50000;
  } else {
    cardLevel = 'Gold';
    limit = 10000;
  }

  return { cardLevel, limit };
}
