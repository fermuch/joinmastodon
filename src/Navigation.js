import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import mastodonLogo from './assets/logo_full.svg';

const Navigation = () => (
  <div className='navbar container'>
    <ul className='left'>
      <li>
        <Link className='brand' to='/'>
          <img className='link-logo' src={mastodonLogo} alt='Mastodon'/>
        </Link>
      </li>
    </ul>

    <ul className='right'>
      <li className='optional-link'><a href='https://discourse.joinmastodon.org'><FormattedMessage id='nav.support' defaultMessage='Support' /></a></li>
      <li className='optional-link-2'><a href='https://github.com/tootsuite/documentation'><FormattedMessage id='nav.docs' defaultMessage='Documentation' /></a></li>
      <li><Link to='/sponsors'><FormattedMessage id='nav.sponsors' defaultMessage='Sponsors' /></Link></li>
      <li><a href='https://github.com/tootsuite/mastodon'><FormattedMessage id='nav.code' defaultMessage='Source code' /></a></li>
    </ul>
  </div>
);

export default Navigation;
