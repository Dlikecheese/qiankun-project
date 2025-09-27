import ReactDOM from 'react-dom/client';
import App from './App';

let root = null;
function render(props = {}) {
  const { container } = props;
  const dom = container
    ? container.querySelector('#root')
    : document.getElementById('root');
  if (!root) {
    root = ReactDOM.createRoot(dom);
  }
  root.render(<App />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}
export async function mount(props) {
  render(props);
}
export async function unmount(props) {
  // 'props' is kept for interface consistency with Qiankun lifecycle methods
  if (root) {
    root.unmount();
    root = null;
  }
}
