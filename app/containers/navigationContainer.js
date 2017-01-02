import { connect } from 'react-redux';
import NavigationRoot from '../components/navigationRoot';
import {pushRoute, popRoute} from '../actions/navigationActions';

function mapDispatchToProps(dispatch) {
    return {
         pushRoute: (route) => dispatch(pushRoute(route)),
          popRoute: () => dispatch(popRoute()),
        
    };
}
export default connect(state => ({
    navigation: state.navigation,
}),
    mapDispatchToProps
)(NavigationRoot);