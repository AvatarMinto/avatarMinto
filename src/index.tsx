import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './utils/contextProvider';
import * as serviceWorker from './serviceWorker';
import Router from "./Router";
import 'rc-slider/assets/index.css';
import './styles/index.css';
import theme from "./styles/extendedTheme";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.hydrate(
	<ChakraProvider theme={theme}>
		<Provider>
			<Router />
		</Provider>
	</ChakraProvider>,
	document.getElementById('main')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
