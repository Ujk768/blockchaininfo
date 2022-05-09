import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BlockChainHome from '../images/blockchain-home.jpg';
import BitCoinHome from '../images/bitcoin-home.jpg';
import '../styles/Home.css';
export default function Home() {
  return (
    <>
      <section id="blockchain">
        <Grid className="blockchain-grid" container spacing={2}>
          <Grid item xs={12} md={6}>
            <Container maxWidth="lg">
              <img
                className="blockchain-home-image"
                src={BlockChainHome}
                alt="blockchain-home"
              />
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container maxWidth="lg">
              <h1 className="heading1">BlockChain</h1>
              <p className="text1">
                A blockchain is a distributed database that is shared among the
                nodes of a computer network. As a database, a blockchain stores
                information electronically in digital format. Blockchains are
                best known for their crucial role in cryptocurrency systems,
                such as Bitcoin, for maintaining a secure and decentralized
                record of transactions. The innovation with a blockchain is that
                it guarantees the fidelity and security of a record of data and
                generates trust without the need for a trusted third party.
              </p>
            </Container>
          </Grid>
        </Grid>
      </section>

      <section id="bitcoin">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Container maxWidth="lg">
              <h1 className="heading2">Bitcoin</h1>
              <p className="text2">
                Bitcoin is a cryptocurrency, a virtual currency designed to act
                as money and a form of payment outside the control of any one
                person, group, or entity, and thus removing the need for
                third-party involvement in financial transactions. It is
                rewarded to blockchain miners for the work done to verify
                transactions and can be purchased on several exchanges.
              </p>
            </Container>
          </Grid>

          <Grid item xs={12} md={6}>
            <Container maxWidth="lg">
              <img
                src={BitCoinHome}
                className="bitcoin-home"
                alt="bitcoin-home"
              />
            </Container>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
