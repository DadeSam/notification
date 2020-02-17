
var push = require('web-push');

let vapIdKeys = {
  publicKey: 'BGCCojiq0PZtzr4-IT72zAVbGHN66za8ASxwKs9ZHLf03-E6afBlNejV2g54g91e17n7br88YstdIVjDQDU71V8',
  privateKey: 'sWC3o6VSkYNDfyP7wMGSKf3zgZCAjwb9RahkPIfuDLw'
}

push.setVapidDetails('mailto: test@code.co.uk', vapIdKeys.publicKey, vapIdKeys.privateKey);

let sub = {};
push.sendNotification(sub, 'test message');