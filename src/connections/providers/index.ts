import { BluetoothService } from './bluetooth.service';
import { NetworkService } from './network.service';

export {
	BluetoothService,
	NetworkService
}
export const CONNECTION_PROVIDERS = [BluetoothService, NetworkService];