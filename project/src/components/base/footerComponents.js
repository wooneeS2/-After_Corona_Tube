import "../../design/footer.css";

export function FooterComponents() {
  //TODO p태그 두개는 양쪽 정렬 마지막은 왼쪽정렬
  return (
    <div>
      <footer>
        <div id="footer-div">
          <p id="contact">©Elice AI Track 3기 16팀 식스틴</p>
          <p id="contact">contact : @sixteen</p>
          <p>Chrome에 최적화되어있습니다.</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponents;
