import { useState } from "react";

const CHALLENGES = [
  {
    id: 1,
    tier: "★",
    category: "PHYSICAL",
    categoryKo: "피지컬",
    color: "#ff6b6b",
    title: "카운터 만들기",
    timeEstimate: "5분",
    description: "가장 기본적인 상태 관리. 이거 못 짜면 useState부터 다시.",
    requirements: [
      "숫자가 화면에 보여야 한다",
      "+1 버튼을 누르면 숫자가 1 증가",
      "-1 버튼을 누르면 숫자가 1 감소",
      "리셋 버튼을 누르면 0으로 돌아감",
    ],
    starterCode: `function Counter() {
  // 여기서부터 직접 짜기
  // useState, 버튼 3개, 숫자 표시

  return (
    <div>
      {/* 구현하세요 */}
    </div>
  );
}`,
    checkpoints: [
      "useState를 import 했는가",
      "초기값을 0으로 설정했는가",
      "setCount를 올바르게 호출하는가",
      "리셋이 setCount(0)인가",
    ],
  },
  {
    id: 2,
    tier: "★",
    category: "PHYSICAL",
    categoryKo: "피지컬",
    color: "#ff6b6b",
    title: "토글 스위치",
    timeEstimate: "5분",
    description: "boolean 상태 다루기. 조건부 렌더링의 기본.",
    requirements: [
      "ON / OFF 상태가 텍스트로 보여야 한다",
      "버튼을 누르면 ON ↔ OFF 전환",
      "ON일 때 초록색, OFF일 때 빨간색으로 텍스트 색 변경",
    ],
    starterCode: `function Toggle() {
  // boolean 상태 + 조건부 렌더링

  return (
    <div>
      {/* 구현하세요 */}
    </div>
  );
}`,
    checkpoints: [
      "useState(false) 또는 useState(true)로 시작",
      "setOn(!on) 또는 prev => !prev 사용",
      "삼항 연산자 또는 && 로 조건부 렌더링",
      "style 객체에서 color를 조건부로 설정",
    ],
  },
  {
    id: 3,
    tier: "★★",
    category: "PHYSICAL",
    categoryKo: "피지컬",
    color: "#ff6b6b",
    title: "입력폼 → 리스트 추가",
    timeEstimate: "10분",
    description:
      "controlled input + 배열 상태. 프론트엔드의 빵과 버터.",
    requirements: [
      "텍스트 input이 있다",
      "추가 버튼을 누르면 입력한 텍스트가 아래 리스트에 추가된다",
      "추가 후 input은 빈칸으로 초기화된다",
      "빈 문자열은 추가되지 않는다",
      "각 아이템 옆에 삭제 버튼이 있다",
    ],
    starterCode: `function TodoList() {
  // 상태 2개: input 값, 아이템 배열
  // 함수 2개: 추가, 삭제

  return (
    <div>
      {/* input + button + ul>li 구현 */}
    </div>
  );
}`,
    checkpoints: [
      "useState 2개 (text, items)",
      "input의 value와 onChange가 연결되어 있는가 (controlled)",
      "추가 시 spread [...items, newItem] 사용",
      "삭제 시 filter 사용",
      "빈 문자열 체크 (trim)",
      "리스트에 key 지정",
    ],
  },
  {
    id: 4,
    tier: "★★",
    category: "READING",
    categoryKo: "리딩",
    color: "#4ecdc4",
    title: "타이머 만들기",
    timeEstimate: "15분",
    description:
      "useEffect + setInterval 조합. 클로저 트랩을 직접 겪어봐야 이해됨.",
    requirements: [
      "화면에 초(seconds)가 표시된다",
      "시작 버튼을 누르면 1초마다 숫자가 1씩 증가",
      "정지 버튼을 누르면 멈춘다",
      "리셋 버튼을 누르면 0으로 돌아가고 멈춘다",
      "시작 중에 시작 버튼을 또 눌러도 인터벌이 중복 생기면 안 된다",
    ],
    starterCode: `function Timer() {
  // 상태: seconds, isRunning
  // useEffect에서 setInterval 관리
  // cleanup 잊지 말 것

  return (
    <div>
      {/* 시간 표시 + 시작/정지/리셋 버튼 */}
    </div>
  );
}`,
    checkpoints: [
      "useEffect 의존성 배열에 isRunning 포함",
      "clearInterval로 cleanup 처리",
      "setSec(prev => prev + 1) 함수형 업데이트 사용 (클로저 회피)",
      "리셋 시 isRunning도 false로",
    ],
  },
  {
    id: 5,
    tier: "★★",
    category: "READING",
    categoryKo: "리딩",
    color: "#4ecdc4",
    title: "디바운스 검색",
    timeEstimate: "15분",
    description:
      "타이핑할 때마다 API 호출하면 서버가 죽는다. 디바운스로 해결.",
    requirements: [
      "검색 input이 있다",
      "타이핑이 멈추고 500ms 후에 검색어가 아래에 표시된다 (API 호출 시뮬레이션)",
      "500ms 안에 다시 타이핑하면 이전 타이머는 취소된다",
      "현재 입력 중인 값과 실제 검색된 값을 둘 다 보여준다",
      "'검색 중...' 로딩 표시를 넣어라",
    ],
    starterCode: `function DebouncedSearch() {
  // 상태: inputValue, searchedValue, isSearching
  // useEffect + setTimeout + cleanup

  return (
    <div>
      {/* input + 검색 결과 표시 */}
    </div>
  );
}`,
    checkpoints: [
      "useEffect 의존성 배열에 inputValue",
      "setTimeout 반환값을 clearTimeout으로 cleanup",
      "500ms 뒤에 searchedValue 업데이트",
      "cleanup 함수에서 isSearching도 처리",
    ],
  },
  {
    id: 6,
    tier: "★★★",
    category: "DESIGN",
    categoryKo: "채보 제작",
    color: "#ffd93d",
    title: "탭 컴포넌트 설계",
    timeEstimate: "15분",
    description:
      "재사용 가능한 컴포넌트를 설계해라. 하드코딩하면 0점.",
    requirements: [
      "탭이 3개 이상 있다 (내용은 자유)",
      "탭을 클릭하면 해당 탭의 내용이 보인다",
      "활성 탭이 시각적으로 구분된다",
      "탭 데이터는 배열로 관리하고 map으로 렌더링한다 (하드코딩 금지)",
      "탭 개수가 늘어나도 코드 수정 없이 배열에만 추가하면 된다",
    ],
    starterCode: `// 탭 데이터 구조부터 설계해라
const tabs = [
  // ???
];

function Tabs() {
  // 어떤 상태가 필요한가?
  // 컴포넌트 구조를 어떻게 잡을 것인가?

  return (
    <div>
      {/* 탭 헤더 + 탭 내용 */}
    </div>
  );
}`,
    checkpoints: [
      "탭 데이터가 배열 구조 ({ label, content } 등)",
      "activeTab 상태가 index 또는 id로 관리",
      "탭 버튼을 map으로 렌더링",
      "활성 탭 스타일을 조건부로 적용",
      "내용 영역이 activeTab에 따라 변경",
    ],
  },
  {
    id: 7,
    tier: "★★★",
    category: "DESIGN",
    categoryKo: "채보 제작",
    color: "#ffd93d",
    title: "장바구니 시스템",
    timeEstimate: "25분",
    description:
      "상태 설계 + 컴포넌트 분리 + 파생 상태. 미니 프로젝트급.",
    requirements: [
      "상품 목록이 보인다 (3개 이상, 이름/가격 포함)",
      "각 상품에 '담기' 버튼이 있다",
      "장바구니에 담긴 아이템 목록이 별도 영역에 보인다",
      "같은 상품을 여러 번 담으면 수량이 증가한다 (중복 아이템 X)",
      "장바구니에서 수량 +/- 조절이 가능하다",
      "수량이 0이 되면 장바구니에서 사라진다",
      "총 금액이 실시간으로 계산되어 표시된다",
    ],
    starterCode: `// 상품 데이터
const PRODUCTS = [
  { id: 1, name: '맥북 프로', price: 2500000 },
  { id: 2, name: '에어팟 맥스', price: 769000 },
  { id: 3, name: '아이패드 미니', price: 749000 },
];

// 컴포넌트 구조를 어떻게 나눌 것인가?
// state는 어디에 둘 것인가?
// cart의 데이터 구조는?

function Shop() {
  return (
    <div>
      {/* ProductList + Cart 구현 */}
    </div>
  );
}`,
    checkpoints: [
      "cart 상태의 데이터 구조 설계 (배열 of {id, name, price, qty}? Map?)",
      "담기: 이미 있으면 qty++, 없으면 새로 추가",
      "수량 변경: 불변성 유지하며 업데이트",
      "총 금액: reduce로 파생 상태 계산 (별도 state X)",
      "qty === 0 이면 filter로 제거",
      "컴포넌트를 최소 2개 이상 분리했는가",
    ],
  },
];

function ChallengeCard({ challenge, isOpen, onToggle }) {
  const [showCheckpoints, setShowCheckpoints] = useState(false);

  return (
    <div
      style={{
        background: "#161b22",
        border: `1px solid ${isOpen ? challenge.color + "60" : "#30363d"}`,
        borderRadius: "14px",
        overflow: "hidden",
        transition: "all 0.2s",
      }}
    >
      {/* Header - always visible */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "18px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          color: "#e6edf3",
          textAlign: "left",
        }}
      >
        <span
          style={{
            background: challenge.color + "18",
            color: challenge.color,
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: 700,
            whiteSpace: "nowrap",
            fontFamily: "monospace",
          }}
        >
          {challenge.tier}
        </span>
        <span
          style={{
            background: challenge.color + "15",
            color: challenge.color,
            padding: "3px 10px",
            borderRadius: "6px",
            fontSize: "11px",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {challenge.categoryKo}
        </span>
        <span
          style={{
            flex: 1,
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "-0.3px",
          }}
        >
          {challenge.title}
        </span>
        <span
          style={{
            color: "#484f58",
            fontSize: "12px",
            whiteSpace: "nowrap",
          }}
        >
          ~{challenge.timeEstimate}
        </span>
        <span
          style={{
            color: "#484f58",
            fontSize: "18px",
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          ▾
        </span>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div style={{ padding: "0 20px 20px" }}>
          <p
            style={{
              color: "#8b949e",
              fontSize: "13px",
              lineHeight: 1.6,
              margin: "0 0 16px",
              borderLeft: `3px solid ${challenge.color}40`,
              paddingLeft: "12px",
            }}
          >
            {challenge.description}
          </p>

          {/* Requirements */}
          <div style={{ marginBottom: "16px" }}>
            <h4
              style={{
                color: "#e6edf3",
                fontSize: "13px",
                fontWeight: 700,
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: challenge.color }}>▸</span> 요구사항
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              {challenge.requirements.map((req, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#c9d1d9",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "#484f58",
                      fontFamily: "monospace",
                      fontSize: "11px",
                      marginTop: "2px",
                      userSelect: "none",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {req}
                </div>
              ))}
            </div>
          </div>

          {/* Starter Code */}
          <div style={{ marginBottom: "16px" }}>
            <h4
              style={{
                color: "#e6edf3",
                fontSize: "13px",
                fontWeight: 700,
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: challenge.color }}>▸</span> 시작 코드
            </h4>
            <pre
              style={{
                background: "#0d1117",
                color: "#e6edf3",
                padding: "16px",
                borderRadius: "10px",
                fontSize: "13px",
                lineHeight: 1.7,
                overflowX: "auto",
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                border: "1px solid #21262d",
                margin: 0,
              }}
            >
              {challenge.starterCode}
            </pre>
          </div>

          {/* Checkpoints (hidden by default) */}
          <div>
            <button
              onClick={() => setShowCheckpoints(!showCheckpoints)}
              style={{
                background: showCheckpoints ? "#f8514915" : "#30363d30",
                border: `1px solid ${showCheckpoints ? "#f8514940" : "#30363d"}`,
                borderRadius: "8px",
                padding: "8px 14px",
                color: showCheckpoints ? "#f85149" : "#8b949e",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {showCheckpoints ? "🔓" : "🔒"}{" "}
              {showCheckpoints
                ? "셀프 체크리스트 (다 풀고 봐라)"
                : "다 짰으면 클릭 → 셀프 체크"}
            </button>

            {showCheckpoints && (
              <div
                style={{
                  marginTop: "10px",
                  background: "#f8514908",
                  border: "1px solid #f8514920",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {challenge.checkpoints.map((cp, i) => (
                  <label
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "13px",
                      color: "#c9d1d9",
                      lineHeight: 1.5,
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        marginTop: "3px",
                        accentColor: challenge.color,
                      }}
                    />
                    {cp}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PracticeHub() {
  const [openId, setOpenId] = useState(null);
  const [filter, setFilter] = useState("ALL");

  const filters = [
    { key: "ALL", label: "전체", color: "#e6edf3" },
    { key: "PHYSICAL", label: "⌨️ 피지컬", color: "#ff6b6b" },
    { key: "READING", label: "👁️ 리딩", color: "#4ecdc4" },
    { key: "DESIGN", label: "🎼 채보 제작", color: "#ffd93d" },
  ];

  const filtered =
    filter === "ALL"
      ? CHALLENGES
      : CHALLENGES.filter((c) => c.category === filter);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        color: "#e6edf3",
        fontFamily: "'Pretendard', sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 900,
              letterSpacing: "-1px",
              marginBottom: "8px",
            }}
          >
            🎮 실기 문제
          </h1>
          <p
            style={{
              color: "#8b949e",
              fontSize: "14px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            요구사항만 읽고 직접 짜라. AI 끄고, 공식문서도 최대한 안 보고.
            <br />
            막히면 참고 → 다시 처음부터. 3번 반복하면 손에 붙는다.
          </p>
        </div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border:
                  filter === f.key
                    ? `1px solid ${f.color}60`
                    : "1px solid #30363d",
                background:
                  filter === f.key ? f.color + "15" : "transparent",
                color: filter === f.key ? f.color : "#8b949e",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Challenge list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {filtered.map((c) => (
            <ChallengeCard
              key={c.id}
              challenge={c}
              isOpen={openId === c.id}
              onToggle={() => setOpenId(openId === c.id ? null : c.id)}
            />
          ))}
        </div>

        {/* Footer tip */}
        <div
          style={{
            marginTop: "28px",
            padding: "16px 18px",
            background: "#161b22",
            borderRadius: "10px",
            border: "1px solid #30363d",
          }}
        >
          <p
            style={{
              color: "#8b949e",
              fontSize: "12px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            💡 <strong style={{ color: "#c9d1d9" }}>사용법:</strong> 문제
            하나 열고 → 네 Vite 프로젝트에서 컴포넌트 파일 만들고 → App.tsx에서
            import해서 렌더링 → 요구사항 하나씩 구현.
            다 짰으면 "셀프 체크" 열어서 빠진 거 없나 확인.
          </p>
        </div>
      </div>
    </div>
  );
}