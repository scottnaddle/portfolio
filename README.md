# Scott Portfolio — Astro

개인 포트폴리오 사이트. Astro + Vercel.

## 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행 (http://localhost:4321)
npm run dev

# 3. 빌드
npm run build
```

## 콘텐츠 수정 방법

모든 콘텐츠는 각 페이지 파일 상단의 JavaScript 배열에서 수정합니다.

| 파일 | 수정 내용 |
|------|-----------|
| `src/pages/index.astro` | 홈 featured items, 통계 수치 |
| `src/pages/writing.astro` | 글 목록 |
| `src/pages/projects.astro` | 프로젝트 목록, GitHub 링크 |
| `src/pages/videos.astro` | YouTube 영상 ID |
| `src/pages/about.astro` | 타임라인, 소개, 연락처 |
| `src/layouts/Layout.astro` | 네비게이션, 색상 변수 |

## Vercel 배포

1. GitHub에 push
2. Vercel에서 "New Project" → GitHub repo 연결
3. Framework: Astro (자동 감지)
4. Deploy 클릭

이후 push할 때마다 자동 배포됩니다.

## 퍼블리싱 에이전트 (Claude Code)

```
"writing.astro에 새 글 추가해줘: 제목은 '...' 날짜는 2025..."
→ Claude Code가 파일 수정
→ git push → Vercel 자동 배포
```

## 커스터마이징

`src/layouts/Layout.astro` 상단의 CSS 변수로 색상 변경:

```css
:root {
  --bg: #0e0e0e;          /* 배경색 */
  --accent: #c9a84c;      /* 강조색 (현재: 골드) */
  --text: #e8e4dc;        /* 기본 텍스트 */
}
```
