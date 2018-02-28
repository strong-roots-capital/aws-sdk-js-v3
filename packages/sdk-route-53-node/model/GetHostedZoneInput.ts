import {Structure as _Structure_} from '@aws/types';

export const GetHostedZoneInput: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Id',
        },
    },
};