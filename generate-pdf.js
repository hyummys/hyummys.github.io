const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  console.log('📄 Starting PDF generation...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 고해상도 설정
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2
  });

  // 로컬 HTML 파일 경로
  const htmlPath = `file://${path.resolve(__dirname, 'index.html')}`;
  console.log(`📂 Loading: ${htmlPath}`);

  await page.goto(htmlPath, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // 모든 섹션을 강제로 표시하도록 CSS 및 JavaScript 조작
  await page.addStyleTag({
    content: `
      /* PDF용 스타일 오버라이드 */
      section {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: none !important;
        display: block !important;
        page-break-inside: avoid;
        margin-bottom: 40px;
      }

      .skill-tag, .experience-item, .contact-item {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: none !important;
      }

      /* 페이지 나누기 최적화 및 여백 줄이기 */
      .experience-item {
        page-break-inside: auto;
        break-inside: auto;
        margin-bottom: 16px !important;
        padding: 20px !important;
      }

      .project {
        page-break-inside: auto;
        break-inside: auto;
        margin-bottom: 12px !important;
        padding-bottom: 12px !important;
      }

      .project-section {
        margin-bottom: 16px !important;
      }

      .project h5 {
        margin-bottom: 8px !important;
      }

      .project ul {
        margin-bottom: 8px !important;
      }

      .project li {
        margin-bottom: 2px !important;
      }

      /* 섹션 간격 줄이기 */
      section {
        margin-bottom: 20px !important;
      }

      section h2 {
        margin-bottom: 20px !important;
      }

      /* 네비게이션 숨기기 (PDF에서는 불필요) */
      nav {
        display: none !important;
      }

      /* 헤더 간소화 */
      header {
        padding: 20px 0;
      }
    `
  });

  // JavaScript 애니메이션 비활성화 및 모든 섹션 강제 표시
  await page.evaluate(() => {
    // 모든 섹션 강제 표시
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
      section.style.display = 'block';
    });

    // 모든 요소 강제 표시
    document.querySelectorAll('.skill-tag, .experience-item, .contact-item').forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });

    // 스크롤 이벤트 및 애니메이션 비활성화
    window.onscroll = null;
    document.querySelectorAll('*').forEach(el => {
      el.style.transition = 'none';
      el.style.animation = 'none';
    });
  });

  // 추가 렌더링 대기 시간
  await page.waitForTimeout(5000);

  // PDF 생성 옵션
  const pdfOptions = {
    path: 'James_Portfolio.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size: 10px; color: #666; width: 100%; text-align: center; margin: 10px 0;">
        James Portfolio - Fintech Android Developer
      </div>
    `,
    footerTemplate: `
      <div style="font-size: 10px; color: #666; width: 100%; text-align: center; margin: 10px 0;">
        <span class="pageNumber"></span> / <span class="totalPages"></span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        GitHub: github.com/hyummys
        &nbsp;&nbsp;|&nbsp;&nbsp;
        Email: ajpuop@naver.com
      </div>
    `,
    margin: {
      top: '80px',
      bottom: '80px',
      left: '40px',
      right: '40px'
    }
  };

  console.log('🎨 Generating PDF with high quality settings...');
  await page.pdf(pdfOptions);

  await browser.close();

  console.log('✅ PDF generated successfully: James_Portfolio.pdf');
  console.log('📧 Ready to attach to job applications!');
}

// 스크립트 실행
generatePDF().catch(error => {
  console.error('❌ Error generating PDF:', error);
  process.exit(1);
});