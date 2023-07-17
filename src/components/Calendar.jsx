import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  //1년씩의 간격으로 1990년부터 현재 연도까지 출력하는 함수
  function range(start, end, step = 1) {
    let array = [];
    for (let i = start; i < end; ++i) {
      if (!(i % step)) {
        array.push(i);
      }
    }
    return array;
  }
  const currentYear = new Date().getFullYear(); //당해 년도 가져오기
  const years = range(1990, currentYear + 1, 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return (
    <DatePicker
      locale={ko}
      dateFormat={"yyyy.MM.dd"}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={date.getFullYear()} //달력에서 선택된 날짜가 date에 할당되고, 그 할당된 날짜의 년도만 빼서 value에 넣어준다.
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[date.getMonth()]} //선택된 날짜의 달을 months[] 배열의 index로 넣어서 value 값으로 갖는다.
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default Calendar;
