const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const scss = require('./webpack/scss');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'public')
};

const common = merge([
  {
    entry: {
      'index': PATHS.source + '/index.js'
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name]_01.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/index.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'login.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/login.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'contacts.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/contacts.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'orders.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/orders.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'order.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/order.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'orderAccepted.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/orderAccepted.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'searchResults.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/searchResults.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'productDescription.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/productDescription.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'contracts.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/contracts.pug'
      }),

      // Modals
      new HtmlWebpackPlugin({
        filename: 'forgotPasswordModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/forgotPassword.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'forgotPasswordSuccessModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/forgotPasswordSuccess.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'filterModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/filter.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'searchModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/search.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'selectModelModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/selectModel.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'contactsModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/contacts.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'orderSendModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/orderSend.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'orderSendSuccessModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/orderSendSuccess.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'productCancelModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/productCancel.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'detailsModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/details.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'applicabilityTableModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/applicabilityTable.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'checkAvailabilityModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/checkAvailability.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'checkAvailabilityAnalogsModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/checkAvailabilityAnalogs.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'detailsModelModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/detailsModel.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'selectOrderModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/selectOrder.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'scheduleModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/schedule.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'contractsModal.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/modals/contracts.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'orderSendPanel.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/sidebar/orderSend.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'orderDeliveryPanel.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/sidebar/orderDelivery.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'cartPanel.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/sidebar/cart.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'productDescriptionPanel.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/pages/sidebar/productDescription.pug'
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'ru'],
      })
    ]
  },
  pug(),
  fonts(),
  images()
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS(),
      uglifyJS()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      scss(),
      css()
    ]);
  }
};