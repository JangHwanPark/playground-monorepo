export default function UseContextMarkup() {
  return (
    <div>
      <h2>useContext 연습</h2>

      {/* 1. 테마 전환 */}
      <section>
        <h3>테마 설정</h3>
        <button>테마 전환</button>
        <p>현재 테마: </p>

        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
          <h4>중첩된 컴포넌트</h4>
          <p>이 영역도 테마가 적용됩니다</p>
        </div>
      </section>

      {/* 2. 사용자 인증 */}
      <section>
        <h3>사용자 인증</h3>
        <button>로그인</button>
        <button>로그아웃</button>
        <p>로그인 상태: </p>
        <p>사용자 이름: </p>

        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
          <h4>프로필 컴포넌트</h4>
          <p>사용자 정보를 여기에 표시</p>
        </div>
      </section>

      {/* 3. 언어 설정 */}
      <section>
        <h3>다국어 지원</h3>
        <select>
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
        <p>현재 언어: </p>

        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
          <h4>번역된 콘텐츠</h4>
          <p>인사말: </p>
          <p>설명: </p>
        </div>
      </section>

      {/* 4. 장바구니 */}
      <section>
        <h3>쇼핑 카트</h3>
        <button>상품 추가</button>
        <p>장바구니 아이템 수: </p>
        <p>총 금액: 원</p>

        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
          <h4>장바구니 목록</h4>
          <ul>
            {/* 장바구니 아이템 */}
          </ul>
        </div>
      </section>
    </div>
  );
}
