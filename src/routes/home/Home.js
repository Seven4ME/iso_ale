import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <section className={s.banner}>
        <div className={s.root}>
          <div className={s.container}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 ">
                <div className="container">
                  <div className={s.banner__heading}>
                    <h1>
                      Получите до 3000 грн со 100% * скидкой на свой первый
                      кредит!
                    </h1>
                  </div>
                  <div className={s.banner__calc}>
                    <div className="row center-md">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className={s.calculator__left}>
                          <div className={s.calculator__left_heading}>
                            <span>Получить кредит за 10 минут!</span>
                          </div>
                          <div className={s.calculator__left_wrapper}>
                            <div className={s.loan__ammount}>
                              <div className={s.ammount__values}>
                                <p>Сумма</p>
                                <span id="money">2150 грн.</span>
                              </div>
                              <div className={s.ammount__container}>
                                  
                              </div>
                              </div>
                            <div className={s.term}>
                              <div className={s.term__days}>
                                <div className={s.days__value}>
                                    <p>Срок</p>
                                    <span id="days">14 дн.</span>
                                </div>
                                
                                <div className={s.days__container}>
                                
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className={s.calculator__right}>
                          <div className={s.calculator__right_heading}>
                            <span>Общая сумма к оплате</span>
                          </div>
                          <div className={s.total}>
                            <div className={s.total__wrapper}>
                              <table>
                                <tbody>
                                  <tr>
                                    <td>Кредит:</td>
                                    <td className="credit">
                                      <div id="rangeValue">0</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Проценты:</td>
                                    <td className="credit" id="percentage">
                                      2
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Всего:</td>
                                    <td className="credit" id="fullCredit">
                                      2

                                      </td>
                                  </tr>
                                  <tr>
                                    <td>Дата погашения:</td>
                                    <td className="credit" id="dateEnd">
                                      2
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <a className={s.total__button} href="#">
                              Подать заявку
                            </a>
                            <div className={s.round}>
                              <input type="checkbox" id="checkbox" />
                              <label htmlFor="checkbox"></label>
                              <p className={s.check_deskription}>Я новый клиент</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Home);
