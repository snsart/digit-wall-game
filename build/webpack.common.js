const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack=require("webpack");

module.exports={
	entry: {
     	index: './src/js/index.js',
   	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					//'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
			              hmr: process.env.NODE_ENV === 'development',
			            }
					},
					'css-loader'
				]
			},{
			    test: /\.m?js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			    }
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"src/index.html",
		}),
		
		new CleanWebpackPlugin(),
		
		new MiniCssExtractPlugin({
	      filename: '[name].css',
	      //chunkFilename: '[id].css',
	      ignoreOrder: false, // Enable to remove warnings about conflicting order
	    }),
	],
	optimization:{
		minimizer: [new TerserJSPlugin({}),new OptimizeCSSAssetsPlugin({})],
		splitChunks:{
			chunks: 'all',
		    minSize: 30000,
		    maxSize: 0,
		    minChunks: 1,//代码块最少被引用1次
		    maxAsyncRequests: 5,//最多进行5次代码分割，超过5个的代码块会合并为1个
		    maxInitialRequests: 3,//首页最多进行3次代码分割
		    automaticNameDelimiter: '~',//代码块所属缓存组和代码块入口文件的连字符
		    automaticNameMaxLength: 30,
		    name: true,
		    cacheGroups: {
		    	styles: {
		          name: 'styles',
		          test: /\.css$/,
		          chunks: 'all',
		          enforce: true,
		        },
		        vendors: {
		          test: /[\\/]node_modules[\\/]/,
		          priority: -10,
		          //filename:"vendors.js",对异步加载的块不能使用filename
		        },
		        default: {
		          minChunks: 2,
		          priority: -20,
		          reuseExistingChunk: true//对以前用过的，已打包过的文件不进行打包
		        }
		    }
		}
	}
	
}
