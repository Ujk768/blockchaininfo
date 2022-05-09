import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import mainImage from '../images/blockchain-header.jpg';
import '../styles/BlockChain.css';

export default function BlockChain() {
  return (
    <>
      <img className="mainImage1" src={mainImage} alt="block-chain-header" />
      <Box className="contentBox1">
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Container>
              <div className="pagedetails1">
                <h1>Contents:</h1>
                <a className="links1" href="#heading">
                  What is a BlockChain?
                </a>
                <br />
                <a className="links1" href="#heading2">
                  How Does BlockChain work?
                </a>
                <br />
                <a className="links1" href="#heading3">
                  BlockChain Decentralization?
                </a>
              </div>
            </Container>
          </Grid>

          <Grid item xs={6} md={8}>
            <Container maxWidth="sm">
              <h1 id="heading11">What Is a Blockchain?</h1>
              <p>
                A blockchain is a distributed database that is shared among the
                nodes of a computer network. As a database, a blockchain stores
                information electronically in digital format. Blockchains are
                best known for their crucial role in cryptocurrency systems,
                such as Bitcoin, for maintaining a secure and decentralized
                record of transactions. The innovation with a blockchain is that
                it guarantees the fidelity and security of a record of data and
                generates trust without the need for a trusted third party.
              </p>
              <h2 id="heading12">How Does a Blockchain Work?</h2>
              <p>
                The goal of blockchain is to allow digital information to be
                recorded and distributed, but not edited. In this way, a
                blockchain is the foundation for immutable ledgers, or records
                of transactions that cannot be altered, deleted, or destroyed.
                This is why blockchains are also known as a distributed ledger
                technology (DLT). First proposed as a research project in 1991,
                the blockchain concept predated its first widespread application
                in use: Bitcoin, in 2009. In the years since, the use of
                blockchains has exploded via the creation of various
                cryptocurrencies, decentralized finance (DeFi) applications,
                non-fungible tokens (NFTs), and smart contracts.
              </p>
              <h2 id="heading13">Blockchain Decentralization</h2>
              <p>
                Imagine that a company owns a server farm with 10,000 computers
                used to maintain a database holding all of its client’s account
                information. This company owns a warehouse building that
                contains all of these computers under one roof and has full
                control of each of these computers and all of the information
                contained within them. This, however, provides a single point of
                failure. What happens if the electricity at that location goes
                out? What if its Internet connection is severed? What if it
                burns to the ground? What if a bad actor erases everything with
                a single keystroke? In any case, the data is lost or corrupted.
              </p>
              <p>
                What a blockchain does is to allow the data held in that
                database to be spread out among several network nodes at various
                locations. This not only creates redundancy but also maintains
                the fidelity of the data stored therein—if somebody tries to
                alter a record at one instance of the database, the other nodes
                would not be altered and thus would prevent a bad actor from
                doing so. If one user tampers with Bitcoin’s record of
                transactions, all other nodes would cross-reference each other
                and easily pinpoint the node with the incorrect information.
                This system helps to establish an exact and transparent order of
                events. This way, no single node within the network can alter
                information held within it.
              </p>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
