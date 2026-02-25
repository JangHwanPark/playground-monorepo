export default function CustomHooksMarkup() {
  return (
    <div>
      <h2>Custom Hooks 연습</h2>

      {/* 1. useLocalStorage - 로컬 스토리지 관리 */}
      <section>
        <h3>useLocalStorage</h3>
        <input type="text" placeholder="값을 입력하세요" />
        <button>저장</button>
        <button>불러오기</button>
        <button>삭제</button>
        <p>저장된 값: </p>
      </section>

      {/* 2. useToggle - 토글 상태 관리 */}
      <section>
        <h3>useToggle</h3>
        <button>토글</button>
        <button>켜기</button>
        <button>끄기</button>
        <p>상태: </p>
      </section>

      {/* 3. useFetch - 데이터 페칭 */}
      <section>
        <h3>useFetch</h3>
        <input type="text" placeholder="User ID" />
        <button>데이터 가져오기</button>
        <div>
          <p>로딩: </p>
          <p>에러: </p>
          <p>데이터: </p>
        </div>
      </section>

      {/* 4. useDebounce - 디바운스 검색 */}
      <section>
        <h3>useDebounce</h3>
        <input type="text" placeholder="검색어 입력 (500ms 딜레이)" />
        <p>입력 값: </p>
        <p>디바운스된 값: </p>
        <ul>
          {/* 검색 결과 */}
        </ul>
      </section>

      {/* 5. useInterval - 인터벌 타이머 */}
      <section>
        <h3>useInterval</h3>
        <p>카운트: </p>
        <button>시작</button>
        <button>일시정지</button>
        <button>리셋</button>
        <input type="number" placeholder="딜레이(ms)" defaultValue="1000" />
      </section>

      {/* 6. useWindowSize - 윈도우 크기 */}
      <section>
        <h3>useWindowSize</h3>
        <p>너비: px</p>
        <p>높이: px</p>
        <p>모바일 여부: </p>
      </section>

      {/* 7. usePrevious - 이전 값 추적 */}
      <section>
        <h3>usePrevious</h3>
        <input type="number" placeholder="숫자 입력" />
        <p>현재 값: </p>
        <p>이전 값: </p>
        <p>변화량: </p>
      </section>

      {/* 8. useOnClickOutside - 외부 클릭 감지 */}
      <section>
        <h3>useOnClickOutside</h3>
        <button>모달 열기</button>
        <div style={{
          padding: '20px',
          border: '2px solid blue',
          marginTop: '10px',
          display: 'none'
        }}>
          <p>이 영역 밖을 클릭하면 닫힙니다</p>
          <button>닫기</button>
        </div>
        <p>모달 상태: </p>
      </section>

      {/* 9. useForm - 폼 관리 */}
      <section>
        <h3>useForm</h3>
        <form>
          <input type="text" name="username" placeholder="사용자명" />
          <input type="email" name="email" placeholder="이메일" />
          <input type="password" name="password" placeholder="비밀번호" />
          <button type="submit">제출</button>
          <button type="button">초기화</button>
        </form>
        <pre>
          {/* 폼 값 표시 */}
        </pre>
      </section>

      {/* 10. useArray - 배열 관리 */}
      <section>
        <h3>useArray</h3>
        <input type="text" placeholder="아이템 추가" />
        <button>추가</button>
        <button>전체 삭제</button>
        <button>역순 정렬</button>
        <ul>
          {/* 배열 아이템 (각각 삭제 버튼 포함) */}
        </ul>
        <p>아이템 수: </p>
      </section>
    </div>
  );
}
