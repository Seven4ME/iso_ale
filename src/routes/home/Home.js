import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import AmmountSlider from '../../components/Rangeslider/rangesliderAmmount.js';
import DaysSlider from '../../components/Rangeslider/rangesliderDays.js';
import clock from './img/Clock.png';
import online from './img/online.png';
import transparently from './img/transparently.png';
import secure from './img/secure.png';
import first from './img/fill_app.png';
import second from './img/Chat.png';
import third from './img/recievemoney.png';

class Home extends React.Component {
  render() {
    return (
      <div>
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
                              <AmmountSlider />
                              </div>
                              </div>
                            <div className={s.term}>
                              <div className={s.term__days}>
                                <div className={s.days__value}>
                                    <p>Срок</p>
                                    <span id="days">14 дн.</span>
                                </div>
                                
                                <div className={s.days__container}>
                              <DaysSlider />
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
    <section id="features">
			<div className={s.features__wrapper}>
				<div className="container">
					<div className={s.features__heading}>
						<h2>Кредит онлайн <span>Почему Alex Credit?</span> </h2>
					</div>
					<div className={s.features__card}>
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
								<div className={s.card__wrapper_fast}>
									<div className={s.card__image}>
										<img src={clock}/>
									</div>
									<div className={s.card__heading}>
										<h3>Быстро</h3>
									</div>
									<div className={s.card__description}>
										<p>Процесс подтверждения заявок на онлайн-займ в Alex Сredit полностью автоматизирован. Поданные вами данные
											обрабатываются мгновенно, и уже через несколько минут вы увидите деньги на вашем счету</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
								<div className={s.card__wrapper_online}>
									<div className={s.card__image}>
										<img src={online} alt=""/>
									</div>
									<div className={s.card__heading}>
										<h3>Онлайн</h3>
									</div>
									<div className={s.card__description}>
										<p>Чтобы получить кредит, вам не нужно идти в банк, занимать очередь и заполнять многостраничные анкеты.
											Просто отправьте нам заявку на экспресс-кредит, и вы получите деньги в любое удобное для вас время, где бы
											вы ни находились</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
								<div className={s.card__wrapper_transparently}>
									<div className={s.card__image}>
										<img src={transparently} alt=""/>
									</div>
									<div className={s.card__heading}>
										<h3>Прозрачно</h3>
									</div>
									<div className={s.card__description}>
										<p>Когда вы берете онлайн-займ на карту, то можете быть уверены: нет никаких скрытых комиссий и непонятных
											условий в договоре! Полная информация о наших услугах всегда доступна нашим клиентам</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
								<div className={s.card__wrapper_secure}>
									<div className={s.card__image}>
										<img src={secure} alt=""/>
									</div>
									<div className={s.card__heading}>
										<h3>Безопасно</h3>
									</div>
									<div className={s.card__description}>
										<p>Все персональные данные клиентов надежно защищенны. Наши клиенты могут быть уверены в качестве защиты
											персональных данных</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    <section className={s.howitworks}>
			<div className={s.howitworks__wrapper}>
				<div className="container">
					<div className={s.howitworks__heading}>
						<h2>Как это <span>работает</span></h2>
					</div>
					<div className="row">
						<div className="col-md-12 col-lg-4 col-xl-4">
							<div className={s.algorithm__wrapper_first}>
								<div className={s.algorithm__image}>
									<img src={first} alt=""/>
								</div>
								<div className={s.algorithm__step}></div>
								<div className={s.algorithm__heading}>
									<h3>Подайте заявку</h3>
								</div>
								<div className={s.algorithm__description}>
									<p>Подайте заявку онлайн — это займет всего несколько минут.</p>
								</div>

							</div>
						</div>


						<div className="col-md-12 col-lg-4 col-xl-4">
							<div className={s.algorithm__wrapper_second}>
								<div className={s.algorithm__image}>
									<img src={second} alt=""/>
								</div>
								<div className={s.algorithm__step}></div>
								<div className={s.algorithm__heading}>
									<h3>Дождитесь решения</h3>
								</div>
								<div className={s.algorithm__description}>
									<p>Получите подтверждение. Решение о выдаче кредита будет принято сразу же после заполнения вами заявки.</p>
								</div>

							</div>
						</div>
						<div className="col-md-12 col-lg-4 col-xl-4">
							<div className={s.algorithm__wrapper_third}>
								<div className={s.algorithm__image}>
									<img src={third} alt=""/>
								</div>
								<div className={s.algorithm__step}></div>
								<div className={s.algorithm__heading}>
									<h3>Получите деньги</h3>
								</div>
								<div className={s.algorithm__description}>
									<p>Средства поступят на вашу карту в течение нескольких минут после обработки заявки.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
    );
  }
}

export default withStyles(s)(Home);
