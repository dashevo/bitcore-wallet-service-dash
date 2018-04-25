var config = {
  basePath: '/bws/api',
  disableLogs: false,
  port: process.env.BWS_PORT ||  3232,

  // Uncomment to make BWS a forking server
  // cluster: true,

  // Uncomment to set the number or process (will use the # of available CPUs by default)
  // clusterInstances: 4,

  // https: true,
  // privateKeyFile: 'private.pem',
  // certificateFile: 'cert.pem',
  ////// The following is only for certs which are not
  ////// trusted by nodejs 'https' by default
  ////// CAs like Verisign do not require this
  // CAinter1: '', // ex. 'COMODORSADomainValidationSecureServerCA.crt'
  // CAinter2: '', // ex. 'COMODORSAAddTrustCA.crt'
  // CAroot: '', // ex. 'AddTrustExternalCARoot.crt'

  storageOpts: {
    mongoDb: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/bws',
    },
  },
  lockOpts: {
    //  To use locker-server, uncomment this:
    lockerServer: {
      host: process.env.LOCKER_SERVER ||  'locker',
      port: process.env.LOCKER_SERVER_PORT || 3231,
    },
  },
  messageBrokerOpts: {
    //  To use message broker server, uncomment this:
    messageBrokerServer: {
      url: process.env.MESSAGEBROKER_URI || 'http://messagebroker:3380',
    },
  },
  blockchainExplorerOpts: {
    btc: {
      livenet: {
        provider: 'insight',
        url: 'https://insight.dashevo.org:443',
        apiPrefix:'/insight-api-dash'
      },
      testnet: {
        provider: 'insight',
        url: 'https://testnet-insight.dashevo.org:443',
        apiPrefix:'/insight-api-dash'
        // url: 'http://localhost:3001',
        // Multiple servers (in priority order)
        // url: ['http://a.b.c', 'https://test-insight.bitpay.com:443'],
      },
    }
  },
  pushNotificationsOpts: {
    templatePath: './lib/templates',
    defaultLanguage: 'en',
    defaultUnit: 'btc',
    subjectPrefix: '',
    pushServerUrl: 'https://fcm.googleapis.com/fcm',
    authorizationKey: process.env.PUSH_AUTHORIZATIONKEY || 'asd',
  },
  fiatRateServiceOpts: {
    defaultProvider: 'BitPay',
    fetchInterval: 60, // in minutes
  },
  // To use email notifications uncomment this:
  // emailOpts: {
  //  host: 'localhost',
  //  port: 25,
  //  ignoreTLS: true,
  //  subjectPrefix: '[Wallet Service]',
  //  from: 'wallet-service@bitcore.io',
  //  templatePath: './lib/templates',
  //  defaultLanguage: 'en',
  //  defaultUnit: 'btc',
  //  publicTxUrlTemplate: {
  //    livenet: 'https://insight.bitpay.com/tx/{{txid}}',
  //    testnet: 'https://test-insight.bitpay.com/tx/{{txid}}',
  //  },
  //},
  //
  // To use sendgrid:
  // var sgTransport = require('nodemail-sendgrid-transport');
  // mailer:sgTransport({
  //  api_user: xxx,
  //  api_key: xxx,
  // });
};
module.exports = config;
