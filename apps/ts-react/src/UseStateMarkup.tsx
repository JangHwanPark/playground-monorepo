export default function UseStateMarkup() {
  return (
    <div>
      <h2>useState 연습</h2>

      {/* 1. 카운터 */}
      <section>
        <h3>카운터</h3>
        <p>Count: </p>
        <button>증가</button>
        <button>감소</button>
      </section>

      {/* 2. 입력 폼 */}
      <section>
        <h3>입력 폼</h3>
        <input type="text" placeholder="이름을 입력하세요" />
        <p>입력된 값: </p>
      </section>

      {/* 3. 토글 스위치 */}
      <section>
        <h3>토글 스위치</h3>
        <button>토글</button>
        <p>상태: </p>
      </section>

      {/* 4. 리스트 관리 */}
      <section>
        <h3>할 일 목록</h3>
        <input type="text" placeholder="할 일 추가" />
        <button>추가</button>
        <ul>
          {/* 여기에 할 일 목록 렌더링 */}
        </ul>
      </section>
    </div>
  );
}
