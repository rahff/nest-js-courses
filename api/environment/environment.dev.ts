class Environment {
    private devEnv: Env = {
        mongoUri: "mongodb://localhost:27017/nestjs-course"
    }
    private prodEnv: Env = {
        mongoUri: ""
    }

    constructor(private mode: EnvMode){}

    getEnv(): Env {
        return this.mode === EnvMode.development ? this.devEnv : this.prodEnv; 
    }
    
}

interface Env {
    mongoUri: string
}

enum EnvMode {
    development = "development",
    production = "production"
}

export const environment = new Environment(process.env.NODE_ENV as EnvMode);