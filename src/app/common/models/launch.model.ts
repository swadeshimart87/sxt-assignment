export class LaunchModel {
    // tslint:disable-next-line:variable-name
    launch_success?: boolean;
    // tslint:disable-next-line:variable-name
    launch_landing?: boolean;
    // tslint:disable-next-line:variable-name
    mission_name?: string;
    // tslint:disable-next-line:variable-name
    flight_number?: number;
    // tslint:disable-next-line:variable-name
    mission_id?: string[];
    // tslint:disable-next-line:variable-name
    launch_year: number;
    // tslint:disable-next-line:variable-name
    links: {
        mission_patch_small: string
    };
    rocket: {
        first_stage: {
            cores: [{
                land_success: boolean
            }]
        }
    };

    constructor(model?: LaunchModel) {
        if (model) {
            this.launch_landing = model.launch_landing;
            this.launch_success = model.launch_success;
            this.mission_id = model.mission_id;
            this.launch_year = model.launch_year;
            this.flight_number = model.flight_number;
            this.links = model.links;
            this.mission_name = model.mission_name;
            this.rocket = model.rocket;
        }
    }
}
