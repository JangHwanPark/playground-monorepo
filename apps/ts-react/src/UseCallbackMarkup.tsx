export default function UseCallbackMarkup() {
  return (
    <div>
      <h2>useCallback 연습</h2>

      {/* 1. 자식 컴포넌트 최적화 */}
      <section>
        <h3>버튼 클릭 카운터</h3>
        <p>부모 렌더링 횟수: </p>
        <button>부모 리렌더</button>

        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h4>자식 컴포넌트</h4>
          <p>자식 렌더링 횟수: </p>
          <button>클릭</button>
        </div>
      </section>

      {/* 2. 이벤트 핸들러 최적화 */}
      <section>
        <h3>검색 바</h3>
        <input type="text" placeholder="검색어 입력" />
        <button>검색</button>
        <ul>
          {/* 검색 결과 */}
        </ul>
      </section>

      {/* 3. 폼 제출 핸들러 */}
      <section>
        <h3>회원가입 폼</h3>
        <form>
          <input type="text" placeholder="이름" />
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <button type="submit">가입하기</button>
        </form>
        <p>제출 횟수: </p>
      </section>

      {/* 4. 리스트 아이템 핸들러 */}
      <section>
        <h3>할 일 목록 (완료/삭제)</h3>
        <input type="text" placeholder="할 일 추가" />
        <button>추가</button>
        <ul>
          {/* 각 아이템마다 완료/삭제 버튼 */}
        </ul>
      </section>
    </div>
  );
}
