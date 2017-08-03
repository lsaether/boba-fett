# BobaFett

![alt text](https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png "ethereum bounty hunter")

NodeJS script to track the transaction tree of an ethereum address.

### Goals
- Provide BobaFett a known black hat ethereum address.
- BobaFett will start in daemon mode and begin watching all inbound and outbound transactions.
- BobaFett will log all tx hashes, and keep a list of current endpoints of ether transfers.
- Provide exchanges or authorities with lists of endpoint addresses and try to find a linked ID.

### Concerns
- An attacker could make many tiny transfers to possibly benign addresses.
- SOLUTION TO THE ABOVE: Only pay attention to transfers above a set limit.
- An attacker could "exit" by making a majority transfer to a known bening address.
- SOLUTION TO THE ABOVE: Physically coerce the funds back to rightful owners.

Written for Aeternity Taint analysis tool bounty.
