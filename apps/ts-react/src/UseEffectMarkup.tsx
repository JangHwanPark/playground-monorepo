export default function UseEffectMarkup() {
  return (
    <div>
      <h2>useEffect 연습</h2>

      {/* 1. 타이머 */}
      <section>
        <h3>타이머</h3>
        <p>경과 시간: 초</p>
        <button>시작</button>
        <button>정지</button>
        <button>리셋</button>
      </section>

      {/* 2. 데이터 가져오기 */}
      <section>
        <h3>사용자 데이터</h3>
        <button>데이터 로드</button>
        <div>
          {/* 로딩 상태 */}
          {/* 에러 상태 */}
          {/* 데이터 표시 */}
        </div>
      </section>

      {/* 3. 윈도우 리사이즈 감지 */}
      <section>
        <h3>윈도우 크기</h3>
        <p>너비: px</p>
        <p>높이: px</p>
      </section>

      {/* 4. 로컬 스토리지 동기화 */}
      <section>
        <h3>메모 저장</h3>
        <textarea placeholder="메모를 입력하세요" rows={4} cols={50} />
        <p>마지막 저장: </p>
      </section>
    </div>
  );
}
