import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Mortgage.css';

const Mortgage = () => {
  const loanAmtSliderRef = useRef();
  const intRateSliderRef = useRef();
  const loanPeriodSliderRef = useRef();
  let line = null;
  let pie = null;

  useEffect(() => {
    const loanAmtSlider = loanAmtSliderRef.current;
    const intRateSlider = intRateSliderRef.current;
    const loanPeriodSlider = loanPeriodSliderRef.current;

    const displayDetails = () => {
      const P = parseFloat(loanAmtSlider.value);
      const R = parseFloat(intRateSlider.value);
      const N = parseFloat(loanPeriodSlider.value);

      const calculateLoanDetails = (p, r, emi) => {
        let totalInterest = 0;
        let yearlyInterest = [];
        let yearPrincipal = [];
        let years = [];
        let year = 1;
        let [counter, principal, interes] = [0, 0, 0];

        while (p > 0) {
          let interest = parseFloat(p) * parseFloat(r);
          p = parseFloat(p) - (parseFloat(emi) - interest);
          totalInterest += interest;
          principal += parseFloat(emi) - interest;
          interes += interest;

          if (++counter === 12) {
            years.push(year++);
            yearlyInterest.push(parseInt(interes));
            yearPrincipal.push(parseInt(principal));
            counter = 0;
          }
        }

        line.data.datasets[0].data = yearPrincipal;
        line.data.datasets[1].data = yearlyInterest;
        line.data.labels = years;

        return totalInterest;
      };

      let r = parseFloat(R) / 1200;
      let n = parseFloat(N) * 12;

      let num = parseFloat(P) * r * Math.pow(1 + r, n);
      let denom = Math.pow(1 + r, n) - 1;
      let emi = parseFloat(num) / parseFloat(denom);

      let payabaleInterest = calculateLoanDetails(P, r, emi);

      let opts = '{style: "decimal", currency: "US"}';

      document.querySelector('#cp').innerText =
        parseFloat(P).toLocaleString('en-US', opts) + '$';

      document.querySelector('#ci').innerText =
        parseFloat(payabaleInterest).toLocaleString('en-US', opts) + '$';

      document.querySelector('#ct').innerText =
        parseFloat(parseFloat(P) + parseFloat(payabaleInterest)).toLocaleString(
          'en-US',
          opts
        ) + '$';

      document.querySelector('#price').innerText =
        parseFloat(emi).toLocaleString('en-US', opts) + '$';

      pie.data.datasets[0].data[0] = P;
      pie.data.datasets[0].data[1] = payabaleInterest;
      pie.update();
      line.update();
    };

    loanAmtSlider.addEventListener('input', displayDetails);
    intRateSlider.addEventListener('input', displayDetails);
    loanPeriodSlider.addEventListener('input', displayDetails);

    const lineChartCanvas = document.getElementById('lineChart');
    const pieChartCanvas = document.getElementById('pieChart');

    line = new Chart(lineChartCanvas.getContext('2d'), {
      type: 'line',
      data: {
        datasets: [
          {
            type: 'line',
            label: 'Yearly Principal paid',
            borderColor: 'rgb(54, 162, 235)',
            data: [],
          },
          {
            type: 'line',
            label: 'Yearly Interest paid',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
          },
        ],
        labels: [],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Yearly Payment Breakdown',
          },
        },
        scales: {
          x: {
            title: {
              color: 'grey',
              display: true,
              text: 'Years Passed',
            },
          },
          y: {
            title: {
              color: 'grey',
              display: true,
              text: 'Money in Rs.',
            },
          },
        },
      },
    });

    pie = new Chart(pieChartCanvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Principal', 'Interest'],
        datasets: [
          {
            label: 'Home Loan Details',
            data: [0, 0],
            backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Payment Breakup',
          },
        },
      },
    });

    displayDetails();

    return () => {
      loanAmtSlider.removeEventListener('input', displayDetails);
      intRateSlider.removeEventListener('input', displayDetails);
      loanPeriodSlider.removeEventListener('input', displayDetails);
      line.destroy();
      pie.destroy();
    };
  }, []);

  return (
    <div className="mortgage-container">
      <div className="mortgage-wrapper">
        <div className="mortgage-header">
          <h1 style={{ color: '#6258A8' }}>Mortgage Calculator</h1>
          <button>
            <i className="bi bi-list"></i>
          </button>
        </div>
        <div className="sub-container">
          <div className="mortgage-view">
            <div className="mortgage-details">
              <div>
                <div className="mortgage-detail">
                  <p style={{ color: '#9088D2' }}>Amount</p>
                  <p id="loan-amt-text" ></p>
                </div>
                <input
                  type="range"
                  id="loan-amount"
                  min="0"
                  max="10000000"
                  step="50000"
                  ref={loanAmtSliderRef}
                />
              </div>
              <div>
                <div className="mortgage-detail">
                  <p style={{ color: '#9088D2' }}>Length</p>
                  <p id="loan-period-text" style={{ color: '#6258A8' }}></p>
                </div>
                <input
                  type="range"
                  id="loan-period"
                  min="1"
                  max="30"
                  step="1"
                  ref={loanPeriodSliderRef}
                />
              </div>
              <div>
                <div className="mortgage-detail">
                  <p style={{ color: '#9088D2' }}>% Interest</p>
                  <p id="interest-rate-text" style={{ color: '#6258A8' }}></p>
                </div>
                <input
                  type="range"
                  id="interest-rate"
                  min="1"
                  max="15"
                  step="0.5"
                  ref={intRateSliderRef}
                />
              </div>
            </div>
            <div className="mortgage-footer">
              <p id="price-container">
                <span id="price">0</span>/mo
              </p>
            </div>
          </div>
          <div className="mortgage-breakup">
            <canvas id="pieChart"></canvas>
          </div>
        </div>
        <div>
          <div className="mortgage-loan-details">
            <div className="mortgage-chart-details">
              <p style={{ color: '#9088D2' }}>Principal</p>
              <p id="cp" style={{ color: '#130F31', fontSize: '17px' }}></p>
            </div>
            <div className="mortgage-chart-details">
              <p style={{ color: '#9088D2' }}>Interest</p>
              <p id="ci" style={{ color: '#130F31', fontSize: '17px' }}></p>
            </div>
            <div className="mortgage-chart-details">
              <p style={{ color: '#9088D2' }}>Total Payable</p>
              <p id="ct" style={{ color: '#130F31', fontSize: '17px' }}></p>
            </div>
          </div>
          <canvas id="lineChart" height="200px" width="200px"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Mortgage;