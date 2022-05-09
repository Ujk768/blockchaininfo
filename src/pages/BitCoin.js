import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import mainImage from '../images/bitcoin-header.webp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { Button, Input } from '@mui/material';
import '../styles/Bitcoin.css';
export default function BitCoin() {
  const [currency, setCurrency] = useState('');
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const getCurrencyData = async () => {
    try {
      const res = await axios.get(
        `https://blockchain.info/tobtc?currency=${currency}&value=${value}`
      );
      console.log(res.data);
      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img className="mainImage" src={mainImage} alt="block-chain-header" />
      <Box className="contentBox">
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <Container>
              <div className="pagedetails">
                <h1>Contents:</h1>
                <a className="links" href="#heading">
                  What Is BitCoin?
                </a>
                <br />
                <a className="links" href="#heading2">
                  Understanding Bitcoin
                </a>
                <br />
                <a className="links" href="#heading3">
                  Bitcoin's Blockchain Technology
                </a>
                <br />
                <a className="links" href="#currency-exchange">
                  Currency Excahnge calculator
                </a>
              </div>
            </Container>
          </Grid>

          <Grid item xs={6} md={10}>
            <Container maxWidth="sm">
              <h1 id="heading">What Is BitCoin?</h1>
              <p>
                Bitcoin is a cryptocurrency, a virtual currency designed to act
                as money and a form of payment outside the control of any one
                person, group, or entity, and thus removing the need for
                third-party involvement in financial transactions. It is
                rewarded to blockchain miners for the work done to verify
                transactions and can be purchased on several exchanges. Bitcoin
                was introduced to the public in 2009 by an anonymous developer
                or group of developers using the name Satoshi Nakamoto. It has
                since become the most well-known cryptocurrency in the world.
                Its popularity has inspired the development of many other
                cryptocurrencies. These competitors either attempt to replace it
                as a payment system or are used as utility or security tokens in
                other blockchains and emerging financial technologies.
              </p>
              <h2 id="heading2">Understanding Bitcoin</h2>
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
              <h2 id="heading3">Bitcoin's Blockchain Technology</h2>
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
              <section className="calculator">
                <h1 id="currency-exchange">
                  BitCoin Currency Exchange calculator
                </h1>

                <h3>Enter the Currency:</h3>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Currency
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currency}
                      label="Currency"
                      onChange={handleCurrencyChange}
                    >
                      <MenuItem value={'USD'}>USD</MenuItem>
                      <MenuItem value={'AUD'}>AUD</MenuItem>
                      <MenuItem value={'BRL'}>BRL</MenuItem>
                      <MenuItem value={'CAD'}>CAD</MenuItem>
                      <MenuItem value={'CHF'}>CHF</MenuItem>
                      <MenuItem value={'CLP'}>CLP</MenuItem>
                      <MenuItem value={'DKK'}>DKK</MenuItem>
                      <MenuItem value={'EUR'}>EUR</MenuItem>
                      <MenuItem value={'GBP'}>GBP</MenuItem>
                      <MenuItem value={'HKD'}>HKD</MenuItem>
                      <MenuItem value={'INR'}>INR</MenuItem>
                      <MenuItem value={'ISK'}>ISK</MenuItem>
                      <MenuItem value={'JPY'}>JPY</MenuItem>
                      <MenuItem value={'KRW'}>KRW</MenuItem>
                      <MenuItem value={'NZD'}>NZD</MenuItem>
                      <MenuItem value={'PLN'}>PLN</MenuItem>
                      <MenuItem value={'RUB'}>RUB</MenuItem>
                      <MenuItem value={'SEK'}>SEK</MenuItem>
                      <MenuItem value={'SGD'}>SGD</MenuItem>
                      <MenuItem value={'TRY'}>TRY</MenuItem>
                      <MenuItem value={'TWD'}>TWD</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <h3>Enter the Amount:</h3>
                <Input onChange={handleValueChange} />

                <Button className="submit" onClick={getCurrencyData}>
                  Find Worth in Bitcoin
                </Button>

                <h1>
                  <span className="result">
                    <CurrencyBitcoinIcon className="bitcoin-icon" />
                    <span>:</span>
                    {result}
                  </span>
                </h1>
              </section>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
