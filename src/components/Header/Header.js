/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import rangeStyles from 'react-rangeslider/lib/index.css';
import grid from 'react-flexgrid/lib/flexgrid.css';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import logoUrl from './logo-alex.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.top__nav}>
          <div className="container">
            <div className="row middle-md between-md">
              <div className="col-xs-7 col-sm-7 col-md-2 col-lg-2 col-xl-2">
                <div className="logo">
                  <Link className={s.brand} to="/">
                    <img src={logoUrl} alt="React" />
                  </Link>
                </div>
              </div>

              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div className={s.language__wrapper}>
                  <input
                    id="cmn-toggle-4"
                    ng-model="langSet"
                    value="0"
                    className={`${s.cmn} ${s.flat}`}
                    type="checkbox"
                  />
                  <label htmlFor="cmn-toggle-4">
                    <span className={s.ruLang}>RU</span>
                    <span className={s.uaLang}>UA</span>
                  </label>
                  <Link to="/login" className={s.login}>
                    Вход
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(grid, s, rangeStyles)(Header);
