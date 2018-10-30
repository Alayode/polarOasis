/**
 * this interface shares the settings to BlueEye Urls all settings properties takes a string or number data type
 *
 **/
export interface AppConfigGlobal {

    /**
     *
     * Using an interface to form a contract  withthe app-config.service.
     *  Config is passed in as an object called settings
     *  **/
    
      settings: {
        pollingInterval: number;
        endPoints: {
          jbOriginsUrl: string;
          codeShareUrl: string;
          crewDetailsUrl: string;
          crewPairingUrl: string;
          inflightAmenities: string;
          crewServiceUrl: string;
          fuelServiceUrl: string;
          searchStatsUrl: string;
          onBoardServiceUrl: string;
          historyServiceUrl: string;
          reportServiceUrl: string;
        };
      };
    }
    