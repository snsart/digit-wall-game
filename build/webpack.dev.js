const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const commonConfig=require('./webpack.common.js');

const devConfig={
	mode:"development",
   	devServer:{
   		contentBase:'./dist',
   		open:true,
   		port:8080,
   		hot:true,
   		hotOnly:true
   	},
   	devtool:'cheap-module-eval-source-map',
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	optimization:{
		usedExports:true
	},
	output:{
		filename: '[name].js',
		chunkFilename:'[name].chunk.js',
		path:path.resolve(__dirname,'.././dist')
	}
}

module.exports=merge(devConfig,commonConfig);
