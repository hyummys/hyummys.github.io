# 📄 포트폴리오 PDF 생성 가이드

## 🚀 빠른 시작

### 1단계: 의존성 설치
```bash
npm install
```

### 2단계: PDF 생성
```bash
npm run pdf
```

## 📋 상세 설명

### 생성되는 파일
- **파일명**: `James_Portfolio.pdf`
- **위치**: 프로젝트 루트 폴더
- **품질**: 고해상도 (2x DPI)
- **형식**: A4, 인쇄 최적화

### PDF 특징
✅ **헤더**: James Portfolio - Fintech Android Developer
✅ **푸터**: 페이지 번호 + GitHub + Email
✅ **배경**: CSS 스타일 완전 적용
✅ **폰트**: 웹 폰트 포함
✅ **이미지**: 고해상도 렌더링

### 토스플레이스 지원용 최적화
- **A4 용지** 기준 최적화
- **ATS 친화적** 텍스트 레이어 보존
- **인쇄용** 색상 및 대비 조정
- **모바일 뷰** 반영

## 🛠 커스터마이징

### PDF 옵션 수정 (`generate-pdf.js`)
```javascript
const pdfOptions = {
  path: 'James_Portfolio.pdf',        // 파일명 변경
  format: 'A4',                       // A3, Letter 등
  printBackground: true,              // 배경 포함
  margin: {
    top: '80px',                      // 여백 조정
    bottom: '80px',
    left: '40px',
    right: '40px'
  }
};
```

### 헤더/푸터 수정
- `headerTemplate`: 상단 정보
- `footerTemplate`: 하단 연락처

## 🔧 문제 해결

### 한글 폰트 깨짐
```bash
# Windows 추가 설정
npm install puppeteer --unsafe-perm=true
```

### 로딩 시간 증가
`generate-pdf.js`에서 `waitForTimeout` 값 증가:
```javascript
await page.waitForTimeout(5000); // 3000 → 5000
```

### 스타일 미적용
로컬 서버 실행 후 PDF 생성:
```bash
python -m http.server 8000
# 새 터미널에서
npm run pdf
```

## 📧 사용 케이스

### 토스플레이스 지원
1. `npm run pdf` 실행
2. `James_Portfolio.pdf` 생성 확인
3. 지원서에 첨부

### 인쇄용
- 300DPI 고해상도 출력
- 색상 정확도 보장
- A4 용지 최적화

### 이력서 대체
- 기술 스택 상세 정보
- 프로젝트 포트폴리오 통합
- 시각적 매력도 ⬆️

---

**💡 팁**: PDF 생성 전 `http://localhost:8000`에서 미리보기를 통해 레이아웃을 확인하세요!