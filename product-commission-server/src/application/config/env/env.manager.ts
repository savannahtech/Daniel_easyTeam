import 'dotenv/config';
import {requiredEnvPropKeys} from "./env.props";

export class EnvManager {
  constructor(private env: { [k: string]: string | undefined }) { }

  private expectedEnvValues(): string[] {
    return requiredEnvPropKeys;
  }

  public getEnvValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`\tmissing env.${key}.\n \n\t***Please add ${key} in .env file***\n`);
    }
    return value;
  }

  public ensureEnvValues() {
    this.expectedEnvValues().forEach(k => this.getEnvValue(k, true));
    return new EnvManager(process.env);
  }

  public isProduction() {
    return this.getEnvValue('NODE_ENV', false) != 'development';
  }
}

export const envManager = new EnvManager(process.env).ensureEnvValues();