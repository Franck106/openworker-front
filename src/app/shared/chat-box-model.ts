interface ChatBoxListener {
  onmessagesent: (message: string) => void;
}

interface ChatBoxModel {
  listeners: ChatBoxListener[];
}

declare var createChatBox: (rootElement: HTMLElement | null, sourceId: string, targetId: string) => ChatBoxModel;
