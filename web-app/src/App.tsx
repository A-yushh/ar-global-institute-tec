// Root App Component in TypeScript
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from './context/ThemeProvider';
import { AuthModalProvider } from './context/AuthModalProvider';
import AppRouter from './routers/AppRouter';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthModalProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <AppRouter />
          </BrowserRouter>
        </AuthModalProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
