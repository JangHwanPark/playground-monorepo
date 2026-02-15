import { useState, useEffect, useRef } from "react";

const QUESTIONS = [
  // ===== 피지컬 (Physical) - 코드를 직접 칠 수 있는가 =====
  {
    category: "PHYSICAL",
    categoryKo: "피지컬",
    icon: "⌨️",
    difficulty: 1,
    question: "useState로 카운터를 만들 때, 빈칸을 채우세요.",
    code: `const [count, ___①___] = useState(___②___);

<button onClick={() => ___③___(count + 1)}>
  {count}
</button>`,
    blanks: [
      { id: "①", answer: "setCount", hint: "set + 상태이름" },
      { id: "②", answer: "0", hint: "초기값" },
      { id: "③", answer: "setCount", hint: "상태 업데이트 함수" },
    ],
  },
  {
    category: "PHYSICAL",
    categoryKo: "피지컬",
    icon: "⌨️",
    difficulty: 2,
    question: "리스트를 렌더링할 때, 빈칸을 채우세요.",
    code: `const items = ['사과', '바나나', '포도'];

return (
  <ul>
    {items.___①___((item, index) => (
      <li ___②___={index}>{item}</li>
    ))}
  </ul>
);`,
    blanks: [
      { id: "①", answer: "map", hint: "배열을 JSX로 변환하는 메서드" },
      { id: "②", answer: "key", hint: "React가 리스트 아이템을 추적하는 속성" },
    ],
  },
  {
    category: "PHYSICAL",
    categoryKo: "피지컬",
    icon: "⌨️",
    difficulty: 3,
    question: "useEffect로 마운트 시 데이터를 불러올 때, 빈칸을 채우세요.",
    code: `useEffect(___①___ => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data));

  return () => {
    // cleanup
  };
}, ___②___);`,
    blanks: [
      { id: "①", answer: "()", hint: "콜백 함수의 파라미터" },
      { id: "②", answer: "[]", hint: "마운트 시 한 번만 실행하려면?" },
    ],
  },

  // ===== 리딩 (Reading) - 코드를 읽고 결과를 예측할 수 있는가 =====
  {
    category: "READING",
    categoryKo: "리딩",
    icon: "👁️",
    difficulty: 1,
    question: "다음 코드의 버튼을 3번 클릭하면 화면에 뭐가 보일까요?",
    code: `const [count, setCount] = useState(10);

<button onClick={() => setCount(count - 3)}>
  감소
</button>
<p>{count}</p>`,
    choices: [
      { text: "7", correct: false },
      { text: "1", correct: true },
      { text: "10", correct: false },
      { text: "에러 발생", correct: false },
    ],
  },
  {
    category: "READING",
    categoryKo: "리딩",
    icon: "👁️",
    difficulty: 2,
    question: "다음 코드에서 버튼을 클릭하면 console에 뭐가 찍힐까요?",
    code: `const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  console.log(count);
};`,
    choices: [
      { text: "3", correct: false },
      { text: "1", correct: false },
      { text: "0", correct: true },
      { text: "undefined", correct: false },
    ],
  },
  {
    category: "READING",
    categoryKo: "리딩",
    icon: "👁️",
    difficulty: 3,
    question: "이 컴포넌트는 어떤 문제가 있을까요?",
    code: `function Timer() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSec(sec + 1);
    }, 1000);
  }, []);

  return <p>{sec}초</p>;
}`,
    choices: [
      { text: "1초 뒤에 멈춤 (sec이 계속 1)", correct: true },
      { text: "정상 동작함", correct: false },
      { text: "무한 리렌더링 발생", correct: false },
      { text: "에러 발생", correct: false },
    ],
  },

  // ===== 채보 제작 (Design) - 구조를 설계할 수 있는가 =====
  {
    category: "DESIGN",
    categoryKo: "채보 제작",
    icon: "🎼",
    difficulty: 1,
    question:
      "Todo 앱에서 '할 일 목록'과 '입력 폼'을 컴포넌트로 분리한다면, state는 어디에 둬야 할까요?",
    code: `// 구조
<App>
  <TodoForm />
  <TodoList />
</App>`,
    choices: [
      { text: "TodoForm에 둔다", correct: false },
      { text: "TodoList에 둔다", correct: false },
      { text: "App에 둔다 (공통 부모)", correct: true },
      { text: "각각 따로 둔다", correct: false },
    ],
  },
  {
    category: "DESIGN",
    categoryKo: "채보 제작",
    icon: "🎼",
    difficulty: 2,
    question:
      "이 코드에서 input 값이 바뀔 때마다 ExpensiveList까지 리렌더링됩니다. 가장 적절한 해결 방법은?",
    code: `function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState(bigArray);

  return (
    <>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      <ExpensiveList items={items} />
    </>
  );
}`,
    choices: [
      { text: "input을 별도 컴포넌트로 분리", correct: true },
      { text: "useEffect로 query를 감시", correct: false },
      { text: "items를 전역 변수로 빼기", correct: false },
      { text: "setQuery를 setTimeout으로 감싸기", correct: false },
    ],
  },
  {
    category: "DESIGN",
    categoryKo: "채보 제작",
    icon: "🎼",
    difficulty: 3,
    question:
      "다크모드 토글을 구현할 때, 여러 depth의 컴포넌트가 테마를 알아야 합니다. 가장 적절한 방법은?",
    code: `<App>           ← 테마 토글 버튼
  <Layout>
    <Sidebar>
      <NavItem />   ← 테마 필요
    </Sidebar>
    <Main>
      <Card />      ← 테마 필요
      <Footer />    ← 테마 필요
    </Main>
  </Layout>
</App>`,
    choices: [
      { text: "props로 하나하나 내려보내기", correct: false },
      { text: "Context API 사용", correct: true },
      { text: "각 컴포넌트에서 localStorage 직접 읽기", correct: false },
      { text: "window 전역 변수에 저장", correct: false },
    ],
  },
];

const CATEGORY_META = {
  PHYSICAL: {
    color: "#ff6b6b",
    bg: "#ff6b6b15",
    border: "#ff6b6b40",
    label: "피지컬",
    desc: "노트는 보이는데 손이 안 따라감 → 읽으면 이해되는데 빈 에디터에서 못 짜는 상태",
  },
  READING: {
    color: "#4ecdc4",
    bg: "#4ecdc415",
    border: "#4ecdc440",
    label: "리딩",
    desc: "손은 따라가는데 노트가 안 보임 → 짜긴 짜는데 동작 예측이 안 되는 상태",
  },
  DESIGN: {
    color: "#ffd93d",
    bg: "#ffd93d15",
    border: "#ffd93d40",
    label: "채보 제작",
    desc: "남이 만든 채보를 플레이 vs 채보를 직접 만드는 능력 → 설계",
  },
};

function BlankQuestion({ q, onAnswer }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState({});

  const handleChange = (id, value) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const res = {};
    let allCorrect = true;
    q.blanks.forEach((b) => {
      const userAnswer = (answers[b.id] || "").trim();
      const correct =
        userAnswer.toLowerCase() === b.answer.toLowerCase() ||
        userAnswer === b.answer;
      res[b.id] = correct;
      if (!correct) allCorrect = false;
    });
    setResults(res);
    setSubmitted(true);
    onAnswer(allCorrect);
  };

  return (
    <div>
      <pre
        style={{
          background: "#0d1117",
          color: "#e6edf3",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "14px",
          lineHeight: "1.8",
          overflowX: "auto",
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        }}
      >
        {q.code}
      </pre>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        {q.blanks.map((b) => (
          <div
            key={b.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                background: "#161b22",
                color: "#58a6ff",
                padding: "4px 12px",
                borderRadius: "8px",
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "14px",
                minWidth: "36px",
                textAlign: "center",
              }}
            >
              {b.id}
            </span>
            <input
              type="text"
              value={answers[b.id] || ""}
              onChange={(e) => handleChange(b.id, e.target.value)}
              placeholder={b.hint}
              disabled={submitted}
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "10px",
                border: submitted
                  ? results[b.id]
                    ? "2px solid #3fb950"
                    : "2px solid #f85149"
                  : "2px solid #30363d",
                background: submitted
                  ? results[b.id]
                    ? "#3fb95010"
                    : "#f8514910"
                  : "#0d1117",
                color: "#e6edf3",
                fontSize: "15px",
                fontFamily: "'JetBrains Mono', monospace",
                outline: "none",
                transition: "all 0.2s",
              }}
            />
            {submitted && !results[b.id] && (
              <span
                style={{
                  color: "#f85149",
                  fontSize: "13px",
                  fontFamily: "monospace",
                  whiteSpace: "nowrap",
                }}
              >
                → {b.answer}
              </span>
            )}
            {submitted && results[b.id] && (
              <span style={{ fontSize: "16px" }}>✓</span>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          style={{
            marginTop: "16px",
            padding: "10px 28px",
            borderRadius: "10px",
            border: "none",
            background: "#58a6ff",
            color: "#0d1117",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#79c0ff")}
          onMouseLeave={(e) => (e.target.style.background = "#58a6ff")}
        >
          제출
        </button>
      )}
    </div>
  );
}

function ChoiceQuestion({ q, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (idx) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    onAnswer(q.choices[selected].correct);
  };

  return (
    <div>
      <pre
        style={{
          background: "#0d1117",
          color: "#e6edf3",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "14px",
          lineHeight: "1.8",
          overflowX: "auto",
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        }}
      >
        {q.code}
      </pre>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        {q.choices.map((c, idx) => {
          let bg = "#161b22";
          let border = "2px solid #30363d";
          let textColor = "#e6edf3";

          if (selected === idx && !submitted) {
            border = "2px solid #58a6ff";
            bg = "#58a6ff15";
          }
          if (submitted) {
            if (c.correct) {
              bg = "#3fb95018";
              border = "2px solid #3fb950";
              textColor = "#3fb950";
            } else if (selected === idx && !c.correct) {
              bg = "#f8514918";
              border = "2px solid #f85149";
              textColor = "#f85149";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border,
                background: bg,
                color: textColor,
                fontSize: "14px",
                textAlign: "left",
                cursor: submitted ? "default" : "pointer",
                transition: "all 0.15s",
                fontFamily: "'Pretendard', sans-serif",
              }}
            >
              {c.text}
            </button>
          );
        })}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          style={{
            marginTop: "16px",
            padding: "10px 28px",
            borderRadius: "10px",
            border: "none",
            background: selected === null ? "#30363d" : "#58a6ff",
            color: selected === null ? "#484f58" : "#0d1117",
            fontWeight: 700,
            fontSize: "14px",
            cursor: selected === null ? "not-allowed" : "pointer",
            transition: "all 0.15s",
          }}
        >
          제출
        </button>
      )}
    </div>
  );
}

function ResultScreen({ scores, questions }) {
  const categories = ["PHYSICAL", "READING", "DESIGN"];
  const maxByCategory = {};
  const scoreByCategory = {};

  categories.forEach((cat) => {
    const catQs = questions.filter((q) => q.category === cat);
    maxByCategory[cat] = catQs.length;
    scoreByCategory[cat] = scores.filter(
      (s, i) => questions[i].category === cat && s
    ).length;
  });

  const total = scores.filter(Boolean).length;
  const totalMax = questions.length;

  const getGrade = (score, max) => {
    const pct = score / max;
    if (pct >= 0.9) return { label: "S", color: "#ffd93d" };
    if (pct >= 0.7) return { label: "A", color: "#3fb950" };
    if (pct >= 0.5) return { label: "B", color: "#58a6ff" };
    if (pct >= 0.3) return { label: "C", color: "#f0883e" };
    return { label: "D", color: "#f85149" };
  };

  const getAdvice = (cat, score, max) => {
    const pct = score / max;
    if (cat === "PHYSICAL") {
      if (pct >= 0.7)
        return "손이 잘 따라가고 있어. 기본 패턴은 체화된 상태.";
      if (pct >= 0.4)
        return "문법은 아는데 손이 좀 느려. 매일 빈 에디터에서 5분씩 패턴 치는 연습 필요.";
      return "빈 에디터 공포증. AI 끄고 기본 패턴부터 매일 반복 타이핑하자.";
    }
    if (cat === "READING") {
      if (pct >= 0.7)
        return "코드 동작 예측이 잘 돼. 리렌더링/클로저 이해도 높음.";
      if (pct >= 0.4)
        return "대충은 읽히는데 함정에 빠짐. state 업데이트 타이밍을 더 파야 해.";
      return "코드가 어떻게 돌아가는지 예측이 안 되는 상태. console.log 찍어가며 직접 확인하는 습관 필요.";
    }
    if (cat === "DESIGN") {
      if (pct >= 0.7)
        return "컴포넌트 설계 감각이 있어. 상태 배치와 구조 분리를 잘 판단함.";
      if (pct >= 0.4)
        return "감은 있는데 확신이 부족. 작은 앱을 직접 설계해보는 연습 필요.";
      return "채보 제작 레벨. 남이 짠 구조를 분석하는 것부터 시작하자.";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        color: "#e6edf3",
        padding: "40px 20px",
        fontFamily: "'Pretendard', sans-serif",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              background: "linear-gradient(135deg, #ff6b6b, #4ecdc4, #ffd93d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-2px",
            }}
          >
            {total} / {totalMax}
          </div>
          <p style={{ color: "#8b949e", fontSize: "15px", marginTop: "8px" }}>
            총 정답률 {Math.round((total / totalMax) * 100)}%
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat];
            const score = scoreByCategory[cat];
            const max = maxByCategory[cat];
            const grade = getGrade(score, max);
            const advice = getAdvice(cat, score, max);

            return (
              <div
                key={cat}
                style={{
                  background: "#161b22",
                  border: `1px solid ${meta.border}`,
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "20px" }}>
                      {cat === "PHYSICAL" ? "⌨️" : cat === "READING" ? "👁️" : "🎼"}
                    </span>
                    <span
                      style={{
                        color: meta.color,
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {meta.label}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span style={{ color: "#8b949e", fontSize: "14px" }}>
                      {score}/{max}
                    </span>
                    <span
                      style={{
                        color: grade.color,
                        fontWeight: 900,
                        fontSize: "28px",
                        lineHeight: 1,
                      }}
                    >
                      {grade.label}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    height: "6px",
                    background: "#30363d",
                    borderRadius: "3px",
                    overflow: "hidden",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(score / max) * 100}%`,
                      background: meta.color,
                      borderRadius: "3px",
                      transition: "width 0.8s ease",
                    }}
                  />
                </div>

                <p
                  style={{
                    color: "#8b949e",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {advice}
                </p>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "32px",
            padding: "20px",
            background: "#161b22",
            borderRadius: "12px",
            border: "1px solid #30363d",
          }}
        >
          <p
            style={{
              color: "#8b949e",
              fontSize: "13px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            💡 리듬게임이랑 똑같아 — 약한 영역 집중 연습이 가장 빨라.
            피지컬이 약하면 매일 코드 타이핑, 리딩이 약하면 남의 코드 읽고
            동작 예측하기, 채보 제작이 약하면 작은 앱 설계부터.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [started, setStarted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    if (started) {
      setFadeIn(false);
      const t = setTimeout(() => setFadeIn(true), 50);
      return () => clearTimeout(t);
    }
  }, [currentQ, started]);

  const handleAnswer = (correct) => {
    setScores((prev) => [...prev, correct]);
    setAnswered(true);
  };

  const handleNext = () => {
    setAnswered(false);
    setCurrentQ((prev) => prev + 1);
  };

  if (!started) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0d1117",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Pretendard', sans-serif",
          padding: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "520px",
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎮</div>
          <h1
            style={{
              color: "#e6edf3",
              fontSize: "32px",
              fontWeight: 900,
              letterSpacing: "-1px",
              marginBottom: "12px",
            }}
          >
            React 실력 진단
          </h1>
          <p
            style={{
              color: "#8b949e",
              fontSize: "15px",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            리듬게임처럼 프로그래밍도
            <br />
            <span style={{ color: "#ff6b6b" }}>피지컬</span>,{" "}
            <span style={{ color: "#4ecdc4" }}>리딩</span>,{" "}
            <span style={{ color: "#ffd93d" }}>채보 제작</span> 능력으로
            나뉜다.
            <br />
            각 영역 3문제, 총 9문제로 네 실력을 진단해보자.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "32px",
              textAlign: "left",
            }}
          >
            {Object.entries(CATEGORY_META).map(([key, meta]) => (
              <div
                key={key}
                style={{
                  background: meta.bg,
                  border: `1px solid ${meta.border}`,
                  borderRadius: "12px",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    color: meta.color,
                    fontWeight: 800,
                    fontSize: "14px",
                    minWidth: "70px",
                  }}
                >
                  {meta.label}
                </span>
                <span
                  style={{
                    color: "#8b949e",
                    fontSize: "13px",
                    lineHeight: 1.5,
                  }}
                >
                  {meta.desc}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setStarted(true)}
            style={{
              padding: "14px 48px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
              color: "#0d1117",
              fontWeight: 800,
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "-0.5px",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            시작하기
          </button>
        </div>
      </div>
    );
  }

  if (currentQ >= QUESTIONS.length) {
    return <ResultScreen scores={scores} questions={QUESTIONS} />;
  }

  const q = QUESTIONS[currentQ];
  const meta = CATEGORY_META[q.category];
  const isBlank = !!q.blanks;

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        color: "#e6edf3",
        fontFamily: "'Pretendard', sans-serif",
        padding: "32px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(12px)",
          transition: "all 0.4s ease",
        }}
      >
        {/* Progress */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "4px",
              background: "#30363d",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${((currentQ + 1) / QUESTIONS.length) * 100}%`,
                background: `linear-gradient(90deg, ${meta.color}, ${meta.color}88)`,
                borderRadius: "2px",
                transition: "width 0.4s ease",
              }}
            />
          </div>
          <span
            style={{
              color: "#8b949e",
              fontSize: "13px",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
            }}
          >
            {currentQ + 1}/{QUESTIONS.length}
          </span>
        </div>

        {/* Category badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: meta.bg,
            border: `1px solid ${meta.border}`,
            borderRadius: "8px",
            padding: "6px 14px",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontSize: "14px" }}>{q.icon}</span>
          <span
            style={{
              color: meta.color,
              fontWeight: 700,
              fontSize: "13px",
            }}
          >
            {meta.label}
          </span>
          <span style={{ color: "#484f58", fontSize: "13px" }}>
            {"★".repeat(q.difficulty)}{"☆".repeat(3 - q.difficulty)}
          </span>
        </div>

        {/* Question */}
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.5,
            marginBottom: "20px",
            letterSpacing: "-0.3px",
          }}
        >
          {q.question}
        </h2>

        {/* Answer area */}
        {isBlank ? (
          <BlankQuestion q={q} onAnswer={handleAnswer} />
        ) : (
          <ChoiceQuestion q={q} onAnswer={handleAnswer} />
        )}

        {/* Next button */}
        {answered && (
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 28px",
                borderRadius: "10px",
                border: "1px solid #30363d",
                background: "#161b22",
                color: "#e6edf3",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#58a6ff")}
              onMouseLeave={(e) => (e.target.style.borderColor = "#30363d")}
            >
              {currentQ < QUESTIONS.length - 1 ? "다음 →" : "결과 보기 →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}