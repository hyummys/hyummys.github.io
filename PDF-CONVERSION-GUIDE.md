# 📄 마크다운 → PDF 변환 가이드

토스 지원을 위해 작성한 마크다운 파일을 예쁜 PDF로 변환하는 방법입니다.

---

## 🎯 준비된 파일

1. **toss-resume.md** - 이력서 및 경력기술서 (간결한 버전)
2. **toss-portfolio.md** - 포트폴리오 (상세한 기술 문서)

---

## 📌 추천 방법

### 방법 1: VS Code + Markdown PDF 확장 (가장 쉬움)

#### 1단계: 확장 설치
1. VS Code 열기
2. 확장(Extensions) 탭 클릭 (Ctrl+Shift+X)
3. "Markdown PDF" 검색 후 설치 (yzane.markdown-pdf)

#### 2단계: PDF 변환
1. `toss-resume.md` 파일 열기
2. **Ctrl+Shift+P** (명령 팔레트)
3. "Markdown PDF: Export (pdf)" 입력 후 실행
4. `toss-portfolio.md`도 같은 방식으로 변환

#### 3단계: 결과 확인
- `toss-resume.pdf` 생성 확인
- `toss-portfolio.pdf` 생성 확인

**장점**
- ✅ 설치 및 사용이 매우 간단
- ✅ 마크다운 문법 완벽 지원
- ✅ 코드 블록 하이라이팅

**단점**
- ⚠️ 디자인 커스터마이징 제한적

---

### 방법 2: Typora (가장 예쁨)

#### 1단계: Typora 다운로드
- 공식 사이트: https://typora.io/
- Windows/Mac/Linux 지원

#### 2단계: 파일 열기
1. Typora에서 `toss-resume.md` 열기
2. **파일 > 내보내기 > PDF** 선택
3. 저장 위치 및 파일명 지정

#### 3단계: 스타일 적용 (선택사항)
1. **파일 > 환경설정 > 테마**
2. "GitHub" 또는 "Newsprint" 테마 선택
3. 다시 PDF 변환

**장점**
- ✅ 매우 깔끔하고 전문적인 PDF
- ✅ 라이브 프리뷰
- ✅ 테마 선택 가능

**단점**
- ⚠️ 유료 소프트웨어 (무료 평가판 사용 가능)

---

### 방법 3: Pandoc (고급 사용자용)

#### 1단계: Pandoc 설치
```bash
# Windows (Chocolatey)
choco install pandoc

# Mac
brew install pandoc

# 또는 https://pandoc.org/installing.html 에서 다운로드
```

#### 2단계: PDF 변환
```bash
# 기본 변환
pandoc toss-resume.md -o toss-resume.pdf

# 예쁘게 변환 (LaTeX 엔진 사용)
pandoc toss-resume.md -o toss-resume.pdf --pdf-engine=xelatex -V geometry:margin=1in

# 포트폴리오 변환
pandoc toss-portfolio.md -o toss-portfolio.pdf --pdf-engine=xelatex -V geometry:margin=1in
```

#### 3단계: 고급 설정 (선택사항)
```bash
# 한글 폰트 지정
pandoc toss-resume.md -o toss-resume.pdf \
  --pdf-engine=xelatex \
  -V mainfont="Noto Sans KR" \
  -V geometry:margin=1in \
  --highlight-style=tango
```

**장점**
- ✅ 완전한 커스터마이징 가능
- ✅ 배치 처리 가능
- ✅ 무료 오픈소스

**단점**
- ⚠️ 초기 설정 복잡
- ⚠️ LaTeX 엔진 필요할 수 있음

---

### 방법 4: 온라인 변환 (가장 빠름)

#### 추천 사이트

1. **Markdown to PDF** (https://www.markdowntopdf.com/)
   - 파일 업로드만 하면 즉시 변환
   - 별도 설치 불필요

2. **Dillinger** (https://dillinger.io/)
   - 온라인 마크다운 에디터
   - Export > PDF 기능 제공

3. **StackEdit** (https://stackedit.io/)
   - 실시간 프리뷰
   - PDF 내보내기

**장점**
- ✅ 설치 불필요
- ✅ 즉시 사용 가능

**단점**
- ⚠️ 인터넷 연결 필요
- ⚠️ 보안 주의 (민감한 정보 포함 시)

---

## 🎨 PDF 품질 개선 팁

### 1. 페이지 나누기 추가
마크다운에 페이지 나누기 추가:
```markdown
---

<!-- 또는 -->

<div style="page-break-after: always;"></div>
```

### 2. 목차 생성 (Pandoc)
```bash
pandoc toss-portfolio.md -o toss-portfolio.pdf \
  --toc \
  --toc-depth=2 \
  --pdf-engine=xelatex
```

### 3. 커스텀 CSS 적용 (Markdown PDF)
VS Code 설정 (settings.json):
```json
{
  "markdown-pdf.styles": [
    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css"
  ],
  "markdown-pdf.highlightStyle": "github",
  "markdown-pdf.breaks": true
}
```

---

## ✅ 제출 전 체크리스트

### 이력서 및 경력기술서 (toss-resume.pdf)

- [ ] 파일 크기 적절 (<5MB)
- [ ] 모든 페이지 정상 렌더링
- [ ] 한글 폰트 깨짐 없음
- [ ] 표(table) 정상 표시
- [ ] 링크 클릭 가능 확인 (GitHub, LinkedIn)
- [ ] 페이지 번호 확인

### 포트폴리오 (toss-portfolio.pdf)

- [ ] 파일 크기 적절 (<10MB)
- [ ] 코드 블록 하이라이팅 정상
- [ ] 이미지/다이어그램 정상 표시
- [ ] 목차(TOC) 링크 동작 확인
- [ ] 색상 구분 명확
- [ ] 전문적인 외관

---

## 🚀 권장 설정

### VS Code + Markdown PDF (초보자)

**추천 이유**
- 가장 쉽고 빠름
- 별도 소프트웨어 설치 불필요
- VS Code 이미 사용 중이면 완벽

**설정 파일 (.vscode/settings.json)**
```json
{
  "markdown-pdf.executablePath": "",
  "markdown-pdf.format": "A4",
  "markdown-pdf.displayHeaderFooter": false,
  "markdown-pdf.margin": {
    "top": "1cm",
    "bottom": "1cm",
    "left": "1cm",
    "right": "1cm"
  },
  "markdown-pdf.highlightStyle": "github",
  "markdown-pdf.breaks": true,
  "markdown-pdf.emoji": true
}
```

### Typora (디자인 중시)

**추천 이유**
- 가장 깔끔한 PDF
- 실시간 프리뷰
- 프로페셔널한 외관

**사용법**
1. Typora로 파일 열기
2. **파일 > 환경설정 > 테마** → "GitHub" 선택
3. **파일 > 내보내기 > PDF**

---

## 💡 추가 팁

### GitHub Pages로 웹 버전도 제공

포트폴리오 사이트에 추가하면 더 좋습니다:

```bash
# GitHub Pages에 추가
cp toss-resume.md docs/toss-resume.md
cp toss-portfolio.md docs/toss-portfolio.md
git add .
git commit -m "Add Toss application documents"
git push
```

그러면 다음 URL로 접근 가능:
- https://hyummys.github.io/toss-resume
- https://hyummys.github.io/toss-portfolio

**장점**
- PDF + 웹 버전 동시 제공
- 모바일에서도 보기 좋음
- 링크로 공유 가능

---

## 📧 제출 방법

### 파일명 규칙
```
이력서및경력기술서_서재현.pdf
포트폴리오_서재현_Android.pdf
```

### 최종 체크
1. **이력서 및 경력기술서**: 4-6페이지 적절
2. **포트폴리오**: 10-15페이지 적절
3. 한글 깨짐 없음
4. 링크 정상 작동
5. 프로페셔널한 외관

---

## 🎯 결론

**가장 추천하는 방법**

1. **VS Code + Markdown PDF** (빠르고 쉬움)
2. PDF 변환 후 확인
3. 문제 있으면 **Typora**로 재변환
4. 최종 파일명 변경 후 제출

**예상 시간**: 5-10분

---

행운을 빕니다! 🍀

