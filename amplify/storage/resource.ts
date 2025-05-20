import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'FileTransferBucket',
  isDefault: true,
   access: (allow) => ({
    'padna-staff-portal/{entity_id}/*': [
        allow.groups(['admin']).to(['read', 'write', 'delete']),
        allow.authenticated.to(['read']),
        allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'gims-lta/{entity_id}/*': [
        allow.groups(['admin']).to(['read', 'write', 'delete']),
        allow.authenticated.to(['read']),
        allow.entity('identity').to(['read', 'write', 'delete'])
    ]
    // ,
    // 'test/{entity_id}/*': [
    //     allow.groups(['admin']).to(['read', 'write', 'delete']),
    //     allow.authenticated.to(['read']),
    //     allow.entity('identity').to(['read', 'write', 'delete'])
    // ]
   })
});

