# AI랑 그만 싸우고 재활치료
## Todo
- [] 아이템 추가
- [] 아이템 삭제
- [] 아이템 수정
- [] 아이템 필터
  - [] 전체 아이템
  - [] 완료된 아이템
  - [] 삭제된 아이템

## handleSubmit 인자(e) 타입오류
- FormEvent와 관련하여 발생한 지침 변경에 대해 말씀드리겠습니다. 최신 업데이트에 따르면, FormEvent는 더 이상 사용되지 않고 SubmitEvent로 대체되도록 권장되고 있습니다.

### FormEvent vs SubmitEvent
#### FormEvent
전통적으로 React에서 폼 제출 시 사용되던 이벤트 타입입니다.
주로 onSubmit 이벤트 핸들링 시 사용되어 왔습니다.

#### SubmitEvent
최신 웹 표준에 따라 특정으로 폼 제출을 다루기 위해 SubmitEvent로 대체되고 있습니다. SubmitEvent는 기본적으로 Event 인터페이스를 확장하여 좀 더 특화된 기능을 제공할 수 있습니다.

### 이유 및 차이점
SubmitEvent: 더 구체적인 인터페이스이며, 기존 Event에서 확장되어 사용 가능한 기능이 추가될 수 있는 여지를 남깁니다. 따라서 앞으로의 호환성 및 추가 기능을 고려할 때 SubmitEvent로 전환하는 것이 좋습니다.