import React, { useState, useEffect } from 'react';
import './commentSection.css';

function CommentSection() {
	const [textarea, setTextarea] = useState('');

	function handleTextareaChange({ target: { value } }, setValue) {
		setValue(value);
		if (value) {
			document.getElementsByClassName('post-button')[0].style.display = 'block';
		} else {
			document.getElementsByClassName('post-button')[0].style.display = 'none';
		}
	}

	useEffect(() => {
		function postedComments(resize) {
			const commentsPosted = document.getElementsByClassName(
				'posted-comments'
			)[0];

			if (resize) {
				myFunction();
			}

			if (commentsPosted) {
				var MutationObserver =
					window.MutationObserver ||
					window.WebKitMutationObserver ||
					window.MozMutationObserver;
				var observer = new MutationObserver(myFunction);
				observer.observe(commentsPosted, {
					childList: true
				});
			}

			function myFunction() {
				const postedComment = document.getElementsByClassName('posted-comment');
				if (commentsPosted) {
					if (
						commentsPosted.childElementCount === 1 &&
						window.innerWidth > 1023
					) {
						commentsPosted.style.position = 'relative';
						commentsPosted.style.left = '50%';
						commentsPosted.style.transform = 'translate(-50%)';
					} else if (
						commentsPosted.childElementCount > 1 &&
						window.innerWidth > 1023
					) {
						for (let i = 0; i < postedComment.length; i++) {
							postedComment[i].style.left = '0';
							postedComment[i].style.transform = 'translate(0)';
						}
					} else {
						commentsPosted.style.position = 'relative';
						commentsPosted.style.left = '50%';
						commentsPosted.style.transform = 'translate(-50%)';
						for (let i = 0; i < postedComment.length; i++) {
							postedComment[i].style.left = '50%';
							postedComment[i].style.transform = 'translate(-50%)';
						}
					}
				}
			}
		}
		window.addEventListener('resize', () => postedComments(true));
		postedComments(false);
	});

	function OnInput() {
		if (this?.type === 'textarea') {
			this.style.height = 'auto';
			this.style.height = this.scrollHeight + 'px';
		} else {
			document.getElementsByClassName('original-textarea')[0].style.height =
				'20px';
		}
	}

	function handleClick() {
		document.getElementsByClassName('post-button')[0].style.display = 'none';

		if (document.getElementsByClassName('no-comments-yet')[0]) {
			document.getElementsByClassName('posted-comments')[0].innerHTML = '';
		}

		document.getElementsByClassName('posted-comments')[0].insertAdjacentHTML(
			'afterbegin',
			`<div class="user-comment-wrapper posted-comment">
                <div class="profile-picture-container">
                <span class="material-icons profile-picture">account_circle</span>
            </div>
            <div class="user-name-and-comment">
                <p class="user-name" style="text-align:left">Anon user</p>
                <p class="user-comment-input" style="text-align:left;overflow-wrap:anywhere;">${textarea}</p>
            </div>
            </div>`
		);

		document.getElementsByClassName('user-comment-input')[1].style.height = `${
			document.getElementsByClassName('user-comment-input')[0].scrollHeight + 1
		}px`;

		document.getElementsByClassName('user-comment-input')[1].style.height =
			'auto';

		OnInput();
		setTextarea('');
	}

	useEffect(() => {
		const userCommentTextarea = document.getElementsByClassName(
			'original-textarea'
		)[0];

		userCommentTextarea.setAttribute(
			'style',
			'height:' + userCommentTextarea.scrollHeight + 'px;overflow-y:hidden;'
		);

		userCommentTextarea.addEventListener('input', OnInput, false);

		return () =>
			userCommentTextarea.removeEventListener('input', OnInput, false);
	}, [textarea]);

	return (
		<section className="comment-section">
			<h2 className="comment-section__title-container">
				<span className="comment-section__title">Comment section</span>
			</h2>
			<div className="user-comment-wrapper">
				<div className="profile-picture-container">
					<span class="material-icons profile-picture">account_circle</span>
				</div>
				<div className="user-name-and-comment">
					<p className="user-name">Anon user</p>
					<form action="" onSubmit={(event) => event.preventDefault()}>
						<textarea
							value={textarea}
							onChange={(event) => handleTextareaChange(event, setTextarea)}
							type="textarea"
							placeholder="Leave a comment"
							className="user-comment-input original-textarea"
							rows="1"
						></textarea>
						<input
							className="post-button"
							type="submit"
							value="POST"
							onClick={() => handleClick()}
						/>
					</form>
				</div>
			</div>
			<h3 className="posted-comments-title">Posted comments</h3>
			<div className="posted-comments">
				<div className="user-comment-wrapper posted-comment">
					<h3 className="no-comments-yet">No comments yet</h3>
				</div>
			</div>
		</section>
	);
}

export default CommentSection;
