export default function UseMemoMarkup() {
  return (
    <div>
      <h2>useMemo 연습</h2>

      {/* 1. 복잡한 계산 최적화 */}
      <section>
        <h3>소수 계산</h3>
        <input type="number" placeholder="숫자 입력" />
        <p>입력한 숫자까지의 소수 개수: </p>
        <p>계산 시간: ms</p>
      </section>

      {/* 2. 필터링 최적화 */}
      <section>
        <h3>상품 필터</h3>
        <input type="text" placeholder="상품 검색" />
        <select>
          <option value="all">전체</option>
          <option value="electronics">전자제품</option>
          <option value="clothing">의류</option>
          <option value="food">식품</option>
        </select>
        <ul>
          {/* 필터링된 상품 목록 */}
        </ul>
      </section>

      {/* 3. 정렬 최적화 */}
      <section>
        <h3>사용자 목록 정렬</h3>
        <button>이름순</button>
        <button>나이순</button>
        <button>가입일순</button>
        <ul>
          {/* 정렬된 사용자 목록 */}
        </ul>
      </section>

      {/* 4. 그래프 데이터 변환 */}
      <section>
        <h3>차트 데이터</h3>
        <input type="range" min="1" max="100" />
        <p>데이터 포인트 수: </p>
        <div>
          {/* 차트 렌더링 영역 */}
          <p>차트가 여기에 표시됩니다</p>
        </div>
      </section>
    </div>
  );
}
