// ============================================
// 🎮 React 실기 연습 — 마크업에 상태 붙이기
// ============================================
// 이 파일의 컴포넌트들은 전부 "죽어있는 UI"다.
// 보이기만 하고 아무것도 안 된다.
// 네가 할 일: useState, onClick, onChange 등을 붙여서 살려라.
//
// 사용법:
// 1. 이 파일을 네 프로젝트에 복사
// 2. App.tsx에서 하나씩 import해서 테스트
// 3. 아래 주석의 미션을 읽고 상태를 붙여라
// ============================================

// ─────────────────────────────────────────────
// Exercise 1: 카운터 살리기
// 난이도: ★
// ─────────────────────────────────────────────
// 미션: 버튼 3개가 실제로 동작하게 만들어라
// - 숫자가 변해야 한다
// - 리셋이 동작해야 한다
// 건드려야 할 것: useState, onClick 핸들러

import {useState} from "react";

interface CounterHookProps {
  handleClickIncrease: () => void;
  handleClickDecrease: () => void;
  handleClickReset: () => void;
  state: number;
}

const useClickCounter = (): CounterHookProps => {
  const [state, setState] = useState(0);

  const handleClickIncrease = () => {
    console.log('increase')
    setState(prev => prev + 1);
    setState(prev => prev + 1);
  }

  const handleClickDecrease = () => {
    console.log('decrease');
    setState(prev => prev - 1);
  }

  const handleClickReset = () => {
    console.log('reset');
    setState(0);
  }

  return {
    handleClickIncrease,
    handleClickDecrease,
    handleClickReset,
    state
  };
}

interface DefaultCounterHookProps {
  handleClickIncrease: () => void;
  handleClickDecrease: () => void;
  handleClickReset: () => void;
  state: number;
}

const useDefaultCounter = (): DefaultCounterHookProps => {
  const [state, setState] = useState(0);
  const handleClickIncrease = () => {
    setState(state + 1);
    setState(state + 1);
  };
  const handleClickDecrease = () => setState(state - 1);
  const handleClickReset = () => setState(0);
  return {state, handleClickIncrease, handleClickDecrease, handleClickReset};
}

export function Ex1_Counter() {
  // 👉 여기에 상태 추가
  const {
    handleClickIncrease: increase,
    handleClickDecrease: decrease,
    handleClickReset: reset,
    state: countState
  } = useClickCounter();

  const {
    handleClickIncrease: increase2,
    handleClickDecrease: decrease2,
    handleClickReset: reset2,
    state: countState2
  } = useDefaultCounter();

  return (
    <div className='ex1_cnt' style={{padding: 32, fontFamily: 'sans-serif'}}>
      <h2 style={{marginBottom: 8}}>카운터</h2>
      <p style={{fontSize: 48, fontWeight: 900, margin: '16px 0'}}>
        {countState} {/* 👉 이 숫자를 상태로 바꿔라 */}
      </p>
      <div style={{display: 'flex', gap: 8}}>
        <button style={btnStyle} onClick={decrease}>- 1</button>
        {/* 👉 onClick 붙여라 */}
        <button style={btnStyle} onClick={reset}>리셋</button>
        {/* 👉 onClick 붙여라 */}
        <button style={btnStyle} onClick={increase}>+ 1</button>
        {/* 👉 onClick 붙여라 */}
      </div>

      <h2 style={{marginBottom: 8}}>이전값을 더하지않는 카운터</h2>
      <p style={{fontSize: 48, fontWeight: 900, margin: '16px 0'}}>
        {countState2} {/* 👉 이 숫자를 상태로 바꿔라 */}
      </p>
      <div style={{display: 'flex', gap: 8}}>
        <button style={btnStyle} onClick={decrease2}>- 1</button>
        {/* 👉 onClick 붙여라 */}
        <button style={btnStyle} onClick={reset2}>리셋</button>
        {/* 👉 onClick 붙여라 */}
        <button style={btnStyle} onClick={increase2}>+ 1</button>
        {/* 👉 onClick 붙여라 */}
      </div>
    </div>
  )
}


// ─────────────────────────────────────────────
// Exercise 2: 토글 살리기
// 난이도: ★
// ─────────────────────────────────────────────
// 미션: 버튼을 누르면 ON/OFF가 전환되게 만들어라
// - 텍스트가 ON ↔ OFF 바뀌어야 한다
// - 배경색이 바뀌어야 한다 (초록 ↔ 빨강)
// 건드려야 할 것: useState, onClick, 조건부 스타일

export function Ex2_Toggle() {
  // 👉 여기에 상태 추가

  return (
    <div style={{padding: 32, fontFamily: 'sans-serif'}}>
      <h2 style={{marginBottom: 16}}>토글 스위치</h2>
      <div
        style={{
          width: 120,
          height: 56,
          borderRadius: 28,
          background: '#ccc',  /* 👉 상태에 따라 #4ade80 또는 #f87171 */
          display: 'flex',
          alignItems: 'center',
          padding: '0 6px',
          cursor: 'pointer',
          transition: 'background 0.3s',
        }}
        /* 👉 onClick 붙여라 */
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#fff',
            transition: 'transform 0.3s',
            transform: 'translateX(0px)', /* 👉 ON이면 translateX(64px) */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 700,
            color: '#333',
          }}
        >
          OFF {/* 👉 상태에 따라 ON / OFF */}
        </div>
      </div>
    </div>
  )
}


// ─────────────────────────────────────────────
// Exercise 3: 아코디언 살리기
// 난이도: ★
// ─────────────────────────────────────────────
// 미션: 질문을 클릭하면 답변이 열리고 닫히게 만들어라
// - 한 번에 하나만 열려야 한다 (다른 걸 열면 기존 건 닫힘)
// - 열린 항목의 화살표가 회전해야 한다
// 건드려야 할 것: useState, onClick, 조건부 렌더링

const faqData = [
  {q: 'React가 뭔가요?', a: 'UI를 만들기 위한 JavaScript 라이브러리입니다.'},
  {q: 'useState는 언제 쓰나요?', a: '컴포넌트 안에서 변하는 값을 관리할 때 씁니다.'},
  {q: 'useEffect는 뭔가요?', a: '컴포넌트가 렌더링된 후 실행할 작업을 등록합니다.'},
]

export function Ex3_Accordion() {
  // 👉 여기에 상태 추가 (어떤 항목이 열려있는지)

  return (
    <div style={{padding: 32, fontFamily: 'sans-serif', maxWidth: 480}}>
      <h2 style={{marginBottom: 16}}>자주 묻는 질문</h2>
      {faqData.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: '1px solid #e5e7eb',
            padding: '14px 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              fontWeight: 600,
            }}
            /* 👉 onClick 붙여라 */
          >
            {item.q}
            <span
              style={{
                transition: 'transform 0.2s',
                transform: 'rotate(0deg)', /* 👉 열리면 rotate(180deg) */
              }}
            >
              ▾
            </span>
          </div>
          {/* 👉 조건부 렌더링: 이 항목이 열려있을 때만 아래를 보여줘라 */}
          <div style={{padding: '10px 0 0', color: '#6b7280', fontSize: 14, lineHeight: 1.6}}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}


// ─────────────────────────────────────────────
// Exercise 4: 투두리스트 살리기
// 난이도: ★★
// ─────────────────────────────────────────────
// 미션: input에 입력하고 추가 버튼을 누르면 리스트에 추가되게 만들어라
// - input이 controlled component여야 한다
// - 추가 후 input 초기화
// - 빈 문자열 추가 방지
// - 삭제 버튼 동작
// - 완료 토글 (클릭하면 취소선)
// 건드려야 할 것: useState 2개, onChange, onClick, map, filter

export function Ex4_Todo() {
  // 👉 여기에 상태 추가 (input 값, 투두 배열)

  return (
    <div style={{padding: 32, fontFamily: 'sans-serif', maxWidth: 420}}>
      <h2 style={{marginBottom: 16}}>할 일 목록</h2>

      <div style={{display: 'flex', gap: 8, marginBottom: 20}}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          style={inputStyle}
          /* 👉 value, onChange 붙여라 */
        />
        <button style={btnStyle} /* 👉 onClick 붙여라 */>
          추가
        </button>
      </div>

      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        {/* 👉 투두 배열을 map으로 돌려라. 아래는 예시 하드코딩이다. 지워라. */}
        <li style={todoItemStyle}>
          <span
            style={{flex: 1, cursor: 'pointer'}}
            /* 👉 onClick: 완료 토글. 완료면 textDecoration: 'line-through' */
          >
            리액트 공부하기
          </span>
          <button
            style={deleteBtnStyle}
            /* 👉 onClick: 이 아이템 삭제 */
          >
            ✕
          </button>
        </li>
        <li style={todoItemStyle}>
          <span style={{flex: 1, cursor: 'pointer', textDecoration: 'line-through', color: '#9ca3af'}}>
            useState 연습
          </span>
          <button style={deleteBtnStyle}>✕</button>
        </li>
      </ul>

      <p style={{color: '#9ca3af', fontSize: 13, marginTop: 16}}>
        총 2개 | 완료 1개 {/* 👉 이것도 상태에서 계산해라 */}
      </p>
    </div>
  )
}


// ─────────────────────────────────────────────
// Exercise 5: 탭 살리기
// 난이도: ★★
// ─────────────────────────────────────────────
// 미션: 탭을 클릭하면 해당 내용이 보이게 만들어라
// - 활성 탭 스타일 적용
// - 탭 데이터는 이미 배열로 있다. 하드코딩 하지 마라
// 건드려야 할 것: useState, onClick, 조건부 스타일, 조건부 렌더링

const tabData = [
  {label: 'HTML', content: 'HTML은 웹 페이지의 뼈대를 만든다. 태그로 구조를 잡고, 브라우저가 이걸 읽어서 화면에 그린다.'},
  {label: 'CSS', content: 'CSS는 HTML에 옷을 입힌다. 색상, 크기, 위치, 애니메이션 전부 CSS가 담당한다.'},
  {label: 'JavaScript', content: 'JavaScript는 웹에 생명을 불어넣는다. 클릭, 입력, API 호출 같은 동적인 행동을 처리한다.'},
]

export function Ex5_Tabs() {
  // 👉 여기에 상태 추가 (어떤 탭이 활성인지)

  return (
    <div style={{padding: 32, fontFamily: 'sans-serif', maxWidth: 480}}>
      <h2 style={{marginBottom: 16}}>프론트엔드 기초</h2>

      {/* 탭 헤더 */}
      <div style={{display: 'flex', borderBottom: '2px solid #e5e7eb'}}>
        {tabData.map((tab, i) => (
          <button
            key={i}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderBottom: '2px solid transparent', /* 👉 활성이면 #3b82f6 */
              background: 'transparent',
              color: '#9ca3af', /* 👉 활성이면 #3b82f6 */
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              marginBottom: -2,
              transition: 'all 0.15s',
            }}
            /* 👉 onClick 붙여라 */
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 내용 */}
      <div style={{padding: '20px 0', color: '#374151', fontSize: 14, lineHeight: 1.7}}>
        여기에 탭 내용이 보여야 한다 {/* 👉 활성 탭의 content를 보여줘라 */}
      </div>
    </div>
  )
}


// ─────────────────────────────────────────────
// Exercise 6: 장바구니 살리기
// 난이도: ★★★
// ─────────────────────────────────────────────
// 미션: 상품 담기, 수량 조절, 삭제, 총액 계산을 전부 동작하게 만들어라
// - cart 상태의 데이터 구조를 네가 설계해라
// - 같은 상품 중복 담기 → 수량 증가
// - 수량 0이면 자동 삭제
// - 총액은 state가 아니라 계산값이어야 한다
// 건드려야 할 것: useState, 배열/객체 조작, reduce

const products = [
  {id: 1, name: '아메리카노', price: 4500, emoji: '☕'},
  {id: 2, name: '카페라떼', price: 5000, emoji: '🥛'},
  {id: 3, name: '크로와상', price: 3800, emoji: '🥐'},
  {id: 4, name: '치즈케이크', price: 6500, emoji: '🍰'},
]

export function Ex6_Cart() {
  // 👉 여기에 cart 상태 추가
  // 데이터 구조를 직접 설계해라. 예: [{id, name, price, qty}] ? Map? 자유.

  return (
    <div style={{padding: 32, fontFamily: 'sans-serif', maxWidth: 560}}>
      <h2 style={{marginBottom: 20}}>☕ 카페 주문</h2>

      <div style={{display: 'flex', gap: 24, flexWrap: 'wrap'}}>
        {/* 왼쪽: 메뉴 */}
        <div style={{flex: 1, minWidth: 200}}>
          <h3 style={{fontSize: 14, color: '#6b7280', marginBottom: 12}}>메뉴</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            {products.map((p) => (
              <div
                key={p.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: '#f9fafb',
                  borderRadius: 10,
                }}
              >
                <div>
                  <span style={{marginRight: 8}}>{p.emoji}</span>
                  <span style={{fontWeight: 600, fontSize: 14}}>{p.name}</span>
                  <span style={{color: '#9ca3af', fontSize: 13, marginLeft: 8}}>
                    {p.price.toLocaleString()}원
                  </span>
                </div>
                <button
                  style={{
                    ...btnSmallStyle,
                    background: '#3b82f6',
                    color: '#fff',
                  }}
                  /* 👉 onClick: cart에 담기 */
                >
                  담기
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 장바구니 */}
        <div style={{flex: 1, minWidth: 200}}>
          <h3 style={{fontSize: 14, color: '#6b7280', marginBottom: 12}}>장바구니</h3>

          {/* 👉 cart가 비었을 때 */}
          <div style={{color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: '24px 0'}}>
            아직 담은 메뉴가 없습니다
          </div>

          {/* 👉 cart에 아이템이 있을 때 — 아래는 예시 하드코딩이다. 동적으로 바꿔라. */}
          {/*
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={cartItemStyle}>
              <div>
                <span style={{ fontWeight: 600, fontSize: 14 }}>☕ 아메리카노</span>
                <span style={{ color: '#9ca3af', fontSize: 13, marginLeft: 8 }}>4,500원</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button style={btnSmallStyle}>−</button>
                <span style={{ fontWeight: 700, fontSize: 14, minWidth: 20, textAlign: 'center' }}>2</span>
                <button style={btnSmallStyle}>+</button>
              </div>
            </div>
          </div>
          */}

          {/* 총액 */}
          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            <span>총 금액</span>
            <span>0원</span> {/* 👉 reduce로 계산해라 (별도 state 쓰지 마라) */}
          </div>
        </div>
      </div>
    </div>
  )
}


// ─────────────────────────────────────────────
// 공통 스타일 (건드리지 마라)
// ─────────────────────────────────────────────

const btnStyle = {
  padding: '8px 18px',
  borderRadius: 8,
  border: '1px solid #d1d5db',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
}

const btnSmallStyle = {
  padding: '4px 10px',
  borderRadius: 6,
  border: '1px solid #d1d5db',
  fontSize: 12,
  fontWeight: 600,
  cursor: 'pointer',
}

const inputStyle = {
  flex: 1,
  padding: '8px 12px',
  borderRadius: 8,
  border: '1px solid #d1d5db',
  fontSize: 14,
  outline: 'none',
}

const todoItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: '1px solid #f3f4f6',
  fontSize: 14,
}

const deleteBtnStyle = {
  background: 'transparent',
  border: 'none',
  color: '#9ca3af',
  cursor: 'pointer',
  fontSize: 14,
  padding: '4px 8px',
}

const cartItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 12px',
  background: '#f9fafb',
  borderRadius: 8,
}