# 포트폴리오 / CV

서재현(James Seo)의 단일 포트폴리오 문서.
**PDF · HTML · Notion** 다중 포맷 출력을 염두에 두고 단일 Markdown 파일로 관리.

## 파일

| 파일 | 설명 |
|---|---|
| [**portfolio.md**](./portfolio.md) | **단일 포트폴리오 (제출용)** — 프로필 · 자기소개서 · 수상 · 타임라인 · 프로젝트 상세 5개 챕터가 모두 한 파일에 |
| `assets/profile.png` | 프로필 사진 |

> 한 번에 보여야 하는 문서이므로 챕터를 별도 파일로 쪼개지 않고 단일 `portfolio.md`로 관리합니다.

## 미리보기

- **VS Code**: `portfolio.md` 열고 `Ctrl+Shift+V` (또는 `Ctrl+K V` 분할 미리보기)
- **GitHub**: 파일을 클릭하면 Mermaid 다이어그램까지 자동 렌더링됨
- **터미널**: `glow cv/portfolio.md` (glow 설치 시)

## 포맷별 출력 가이드

### Notion으로 가져가기
1. Notion → 좌측 사이드바 우클릭 → **Import** → **Markdown & CSV**
2. `portfolio.md` 선택 → 한 페이지로 들어옴 (목차 자동 인식)
3. Mermaid 다이어그램은 Notion 최신 버전에서 자동 렌더링
4. 이미지(`assets/profile.png`)는 Notion에서 수동 업로드 또는 절대 URL로 교체:
   ```
   https://raw.githubusercontent.com/hyummys/hyummys.github.io/main/cv/assets/profile.png
   ```

### HTML로 출력
```bash
# pandoc 사용 (목차·스타일링 포함)
pandoc cv/portfolio.md -o portfolio.html --standalone --toc \
  --metadata title="서재현 - 포트폴리오"
```

### PDF로 출력
- **옵션 A — Notion에서 Export** (가장 간편): Notion으로 import 한 뒤 ⋯ → Export → PDF
- **옵션 B — pandoc + LaTeX** (한글 폰트 필요):
  ```bash
  pandoc cv/portfolio.md -o portfolio.pdf --pdf-engine=xelatex \
    -V mainfont="NanumGothic" -V geometry:margin=2cm --toc
  ```
- **옵션 C — VS Code 확장**: "Markdown PDF" 확장 설치 후 우클릭 → "Markdown PDF: Export (pdf)"
- **옵션 D — 기존 `generate-pdf.js` 재활용**: 마크다운을 HTML로 변환한 뒤 Puppeteer로 PDF 출력

## 챕터 구성 (한 파일 안에)

1. **프로필 · 이력** — 사진 · 학력 · 경력 요약
2. **자기소개서** — 5개 핵심 강점 · 일하는 방식 · 지향점
3. **경력 타임라인** — Mermaid 다이어그램 + ASCII 백업 + 회사별 핵심 활동
4. **프로젝트 상세** — 9개 회사 프로젝트 STAR (X990 · CU · LV2 인증 · 통합 서명패드 · API 플랫폼 · 주유소 · Genie TV · 영상 분할 · AI 레크리에이션)

## 작성 / 수정 가이드

- **이미지 경로**: 상대 경로(`./assets/profile.png`) — Notion·로컬 모두 동작
- **Mermaid 블록**: GitHub · Notion(최신)에서 자동 렌더링
- **목차(TOC)**: 본문 상단 "📑 목차" 섹션. 헤딩 추가/제거 시 함께 갱신
- **직무 변경 시**: `2. 자기소개서` 챕터의 톤·강조점만 교체하면 됨

## 정책

- 이 폴더의 파일들은 **GitHub Pages에 의도적으로 노출되지 않음** (직접 링크되어 있지 않음)
- `hyummys.github.io` 메인 사이트는 `/index.html`이 단독 진입점 (프로젝트 쇼케이스)
- 이 문서는 인쇄 · 메일 · Notion 공유용 포트폴리오 전용
