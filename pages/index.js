import { connect } from 'react-redux';
// import initialize from '../utils/initialize';
import Home from './home';
import AppLayout from '../components/layout';

const Index = () => (
    
    
    <Home />
);

// Index.getInitialProps = function(ctx) {
//   initialize(ctx);
// };

export default connect(state => state)(Index);