# Playground Monorepo
프론트엔드 학습 저장소입니다.  
**Turborepo + pnpm**을 사용하여 모노레포 환경을 구축했습니다.

- **Package Manager:** [pnpm](https://pnpm.io/)
- **Monorepo Tool:** [Turborepo](https://turbo.build/)

## Monorepo 설정
하나의 저장소(Repository) 안에서 여러 개의 프로젝트를 관리하는 방식입니다.
프로젝트 간에 코드를 쉽게 공유하고, 배포나 빌드 과정을 한 번에 관리할 수 있어 효율적입니다.

## 모노레포 폴더 구조
이 구조는 `pnpm-workspace.yaml` 설정에 의해 정의됩니다. 폴더명은 변경 가능하지만, 통상적인 관습(Convention)을 따릅니다.

### apps
실제로 실행되고 배포되는 서비스 단위(Next.js, React.js, js, ts...)의 프로젝트들이 위치합니다.(Next.js 웹사이트, React 어드민 페이지, 문서 사이트 등)

서로 독립적으로 실행되지만, `packages/`에 있는 코드를 불러와서 사용합니다.

### pakages
`apps`에 있는 프로젝트들이 **공통으로 사용하는 코드**들을 모아두는 곳입니다. (ui(디자인 시스템), eslint-config (설정), utils(함수)등)

여기서 코드를 한 번만 수정하면, 이를 사용하는 모든 `apps` 프로젝트에 자동으로 적용됩니다.