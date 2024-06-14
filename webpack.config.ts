import path from 'path';
import { Configuration } from 'webpack';
import buildWebpack from './config/build/buildWebpack';
import { BuildMode, BuildPaths, BuildPlatform } from './config/types/types';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? 'desktop',
  });

  return config;
};
