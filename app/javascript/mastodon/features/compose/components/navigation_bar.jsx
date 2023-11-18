import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';

import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';

import { Avatar } from '../../../components/avatar';

import ActionBar from './action_bar';

export default class NavigationBar extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    onLogout: PropTypes.func.isRequired,
    onClose: PropTypes.func,
  };

  render () {
    const username = this.props.account.get('acct')
    const url = this.props.account.get('url')
    return (
      <div classNamesName='navigation-bar'>
        <Link to={`/@${username}`} href={url}>
          <span style={{ display: 'none' }}>{username}</span>
          <Avatar account={this.props.account} size={46} />
        </Link>

        <div className='navigation-bar__profile'>
          <span>
            <Link to={`/@${username}`} href={url}>
              <strong className='navigation-bar__profile-account'>@{username}</strong>
            </Link>
          </span>

          <span>
            <a href='/settings/profile' className='navigation-bar__profile-edit'><FormattedMessage id='navigation_bar.edit_profile' defaultMessage='Edit profile' /></a>
          </span>
        </div>

        <div className='navigation-bar__actions'>
          <ActionBar account={this.props.account} onLogout={this.props.onLogout} />
        </div>
      </div>
    );
  }

}
