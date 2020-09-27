interface ChatBoxListener {
  onmessagesent: (message: string) => void;
}

export interface ChatBoxModel {
  listeners: ChatBoxListener[];
}
